import sys
raw = open('skincare-trilingual.html', encoding='utf-8').read()
targets = ["Paula's"]
for t in targets:
    before = raw.count(t)
    fixed_t = t.replace("'", "\\'")
    raw = raw.replace(t, fixed_t)
    print(t, '->', fixed_t, ':', before, 'occurrences fixed')
open('skincare-trilingual.html', 'w', encoding='utf-8').write(raw)
