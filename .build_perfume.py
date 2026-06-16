import json, re, html

raw = open('coty_perfume_market_mindmap.html', encoding='utf-8').read()
m = re.search(r'const rawData = (\{.*?\});\n', raw, re.S)
data = json.loads(m.group(1))

LANGMAP = {'zh':'cn', 'en':'en', 'fr':'fr'}
BRANCH_META = [
    {'id':'brands',      'icon':'fa-tags',         'badge':{'zh':'品牌組合','en':'Brand Portfolio','fr':'Portefeuille'}},
    {'id':'perfumes',    'icon':'fa-flask',        'badge':{'zh':'明星香水','en':'Signature Scents','fr':'Parfums Phares'}},
    {'id':'competitors', 'icon':'fa-chess-knight', 'badge':{'zh':'競爭格局','en':'Competitive Landscape','fr':'Concurrence'}},
]
TITLES = {'zh':'科蒂集團與香水市場情報','en':'Coty & Perfume Market Intelligence','fr':'Coty & Le Marché du Parfum'}
EYEBROW = {'zh':'市場情報','en':'MARKET INTELLIGENCE','fr':'INTELLIGENCE MARCHÉ'}
SUBTITLE = {'zh':'品牌、明星產品與競爭對手深度地圖','en':'Brand, Hero Product & Competitor Deep-Dive Map','fr':'Cartographie des Marques, Produits Phares et Concurrents'}

def esc(s): return html.escape(s, quote=True)

def is_leaf_spec(children):
    """True if children are flat leaf strings forming a Notes/Packaging spec pair."""
    if not children: return False
    return all('children' not in c for c in children)

def render_spec_card(name, children):
    rows = ''
    for c in children:
        txt = c['name']
        if ':' in txt or '：' in txt:
            sep = ':' if ':' in txt else '：'
            label, val = txt.split(sep, 1)
            rows += f'<div class="pf-row"><span class="pf-row-label">{esc(label.strip())}</span><span class="pf-row-val">{esc(val.strip())}</span></div>'
        else:
            rows += f'<div class="pf-row"><span class="pf-row-val">{esc(txt)}</span></div>'
    return f'<div class="pf-card"><h4 class="pf-card-title">{esc(name)}</h4>{rows}</div>'

def render_chip_group(group_name, children):
    chips = ''.join(f'<span class="pf-chip">{esc(c["name"])}</span>' for c in children)
    return f'<div class="pf-chip-group"><div class="pf-chip-group-title">{esc(group_name)}</div><div class="pf-chip-row">{chips}</div></div>'

def render_branch_brands(node):
    # node.children = [Prestige group, Consumer Beauty group], each group.children = flat brand strings
    out = ''
    for grp in node['children']:
        out += render_chip_group(grp['name'], grp['children'])
    return out

def render_branch_perfumes(node):
    out = '<div class="pf-card-grid">'
    for item in node['children']:
        out += render_spec_card(item['name'], item['children'])
    out += '</div>'
    return out

def render_branch_competitors(node):
    out = ''
    for grp in node['children']:
        out += f'<div class="pf-group-title">{esc(grp["name"])}</div><div class="pf-card-grid">'
        for item in grp['children']:
            out += render_spec_card(item['name'], item['children'])
        out += '</div>'
    return out

RENDERERS = [render_branch_brands, render_branch_perfumes, render_branch_competitors]

detail_html = {}
for lang_ui, lang_key in LANGMAP.items():
    root = data[lang_key]
    detail_html[lang_ui] = {}
    for i, branch_node in enumerate(root['children']):
        detail_html[lang_ui][BRANCH_META[i]['id']] = RENDERERS[i](branch_node)

# also capture each branch's own display name per language (for card titles)
branch_titles = {}
for lang_ui, lang_key in LANGMAP.items():
    root = data[lang_key]
    branch_titles[lang_ui] = {BRANCH_META[i]['id']: root['children'][i]['name'] for i in range(3)}

out = {
    'detail_html': detail_html,
    'branch_titles': branch_titles,
    'branch_meta': BRANCH_META,
    'titles': TITLES,
    'eyebrow': EYEBROW,
    'subtitle': SUBTITLE,
}
with open('.tmp_perfume_build.json', 'w', encoding='utf-8') as f:
    json.dump(out, f, ensure_ascii=False)
print('OK')
