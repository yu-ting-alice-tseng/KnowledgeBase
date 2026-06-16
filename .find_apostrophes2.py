import re
raw = open('skincare-trilingual.html', encoding='utf-8').read()
m = re.search(r'<script>(.*?)</script>', raw, re.S)
script = m.group(1)

# Find every apostrophe NOT preceded by a backslash, with context
positions = [i for i, ch in enumerate(script) if ch == "'" and (i == 0 or script[i-1] != '\\')]
print('total unescaped apostrophes:', len(positions))
# Filter to ones that are likely INSIDE a string (heuristic: not immediately preceded/followed by typical
# string-boundary patterns like ", ' or [ or : ) -- instead just print context for manual review,
# deduped by surrounding word
seen = set()
for i in positions:
    ctx = script[max(0,i-20):i+20]
    key = script[max(0,i-8):i+8]
    if key in seen: continue
    seen.add(key)
    print(repr(ctx))
