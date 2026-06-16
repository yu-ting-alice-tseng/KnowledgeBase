import re
raw = open('skincare-trilingual.html', encoding='utf-8').read()
m = re.search(r'<script>(.*?)</script>', raw, re.S)
script = m.group(1)

# Find all single-quoted string literals, looking for ones containing an unescaped apostrophe
# i.e. pattern: 'something containing a bare-word-apostrophe-s like Paula's'
# Simple heuristic: find word characters immediately followed by 's inside what looks like a quoted context
candidates = re.findall(r"[A-Za-z][A-Za-z]*'s\b", script)
uniq = sorted(set(candidates))
for c in uniq:
    print(c, script.count(c))
