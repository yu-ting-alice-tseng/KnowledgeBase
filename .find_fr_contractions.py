import re
raw = open('skincare-trilingual.html', encoding='utf-8').read()
m = re.search(r'<script>(.*?)</script>', raw, re.S)
script = m.group(1)

pattern = re.compile(r"(?<!\\)\b([dlqnscjDLQNSCJ]|[Qq]u)'(?=[A-Za-zÀ-ÿ])")
matches = list(pattern.finditer(script))
out = [f'found {len(matches)}']
seen = set()
for mt in matches:
    i = mt.start()
    ctx = script[max(0,i-15):i+25]
    if ctx in seen: continue
    seen.add(ctx)
    out.append(repr(ctx))
open('.fr_results.txt', 'w', encoding='utf-8').write('\n'.join(out))
