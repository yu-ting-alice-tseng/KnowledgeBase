import re
raw = open('skincare-trilingual.html', encoding='utf-8').read()
m = re.search(r'<script>(.*?)</script>', raw, re.S)
script = m.group(1)

pattern = re.compile(r"(?<!\\)\b([dlqnscjDLQNSCJ]|[Qq]u)'(?=[A-Za-zÀ-ÿ])")
fixed_script, n = pattern.subn(r"\1\\'", script)

new_raw = raw[:m.start(1)] + fixed_script + raw[m.end(1):]
open('skincare-trilingual.html', 'w', encoding='utf-8').write(new_raw)
print('fixed', n, 'contractions')
