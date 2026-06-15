import sys
sys.stdout.reconfigure(encoding='utf-8')

fp = r'C:\Users\Bonita\Desktop\00_Personal Document\07_Portfolio\23_Personal Knowledge Base\skincare-trilingual.html'

with open(fp, encoding='utf-8') as f:
    content = f.read()

replacements = []

# 1. Add products label to L object
replacements.append((
    "    closeBtn: '關閉'\n  },\n  en: {\n    root: 'Skincare\\nActives'",
    "    closeBtn: '關閉',\n    products: '明星產品參考'\n  },\n  en: {\n    root: 'Skincare\\nActives'"
))
replacements.append((
    "    closeBtn: 'Close'\n  },\n  fr: {\n    root: 'Actifs\\nSoin'",
    "    closeBtn: 'Close',\n    products: 'Star Products'\n  },\n  fr: {\n    root: 'Actifs\\nSoin'"
))
replacements.append((
    "    closeBtn: 'Fermer'\n  }",
    "    closeBtn: 'Fermer',\n    products: 'Produits phares'\n  }"
))

# 2. Retinoids - add products field
replacements.append((
    "ingredients: ['Retinol', 'Retinal (retinaldehyde)', 'Tretinoin (藥品)'], note: '效力",
    "ingredients: ['Retinol', 'Retinal (retinaldehyde)', 'Tretinoin (藥品)'], products: ['SkinCeuticals Retinol 0.3/1.0', 'The Ordinary Granactive Retinoid 2% Emulsion', \"Paula's Choice 1% Retinol Booster\", 'RoC Retinol Correxion Line Smoothing Serum', 'Avène RetrinAL 0.1 Intensive Cream'], note: '效力"
))
replacements.append((
    "ingredients: ['Retinol', 'Retinal', 'Tretinoin (Rx)'], note: 'Potency",
    "ingredients: ['Retinol', 'Retinal', 'Tretinoin (Rx)'], products: ['SkinCeuticals Retinol 0.3/1.0', 'The Ordinary Granactive Retinoid 2% Emulsion', \"Paula's Choice 1% Retinol Booster\", 'RoC Retinol Correxion Line Smoothing Serum', 'Avène RetrinAL 0.1 Intensive Cream'], note: 'Potency"
))
replacements.append((
    "ingredients: ['Rétinol', 'Rétinal', 'Trétinoïne (médicament)'], note: 'Puissance",
    "ingredients: ['Rétinol', 'Rétinal', 'Trétinoïne (médicament)'], products: ['SkinCeuticals Retinol 0.3/1.0', 'The Ordinary Granactive Retinoid 2% Emulsion', \"Paula's Choice 1% Retinol Booster\", 'RoC Retinol Correxion Line Smoothing Serum', 'Avène RetrinAL 0.1 Intensive Cream'], note: 'Puissance"
))

# 3. Peptides products
replacements.append((
    "ingredients: ['Matrixyl (Palmitoyl Pentapeptide)', 'Argireline', 'Copper Peptides'], note: '需區分",
    "ingredients: ['Matrixyl (Palmitoyl Pentapeptide)', 'Argireline', 'Copper Peptides'], products: ['The Ordinary Buffet Multi-Peptide Serum', 'Drunk Elephant Protini Polypeptide Cream', 'Olay Regenerist Micro-Sculpting Serum', 'COSRX Advanced Snail 96 Mucin Power Essence', 'Estée Lauder Advanced Night Repair (ANR)'], note: '需區分"
))
replacements.append((
    "ingredients: ['Matrixyl (Palmitoyl Pentapeptide)', 'Argireline', 'Copper Peptides'], note: 'Distinguish",
    "ingredients: ['Matrixyl (Palmitoyl Pentapeptide)', 'Argireline', 'Copper Peptides'], products: ['The Ordinary Buffet Multi-Peptide Serum', 'Drunk Elephant Protini Polypeptide Cream', 'Olay Regenerist Micro-Sculpting Serum', 'COSRX Advanced Snail 96 Mucin Power Essence', 'Estée Lauder Advanced Night Repair (ANR)'], note: 'Distinguish"
))
replacements.append((
    "ingredients: ['Matrixyl', 'Argireline', 'Peptides de cuivre'], note: 'Distinguer",
    "ingredients: ['Matrixyl', 'Argireline', 'Peptides de cuivre'], products: ['The Ordinary Buffet Multi-Peptide Serum', 'Drunk Elephant Protini Polypeptide Cream', 'Olay Regenerist Micro-Sculpting Serum', 'COSRX Advanced Snail 96 Mucin Power Essence', 'Estée Lauder Advanced Night Repair (ANR)'], note: 'Distinguer"
))

# 4. Bakuchiol products
replacements.append((
    "ingredients: ['Bakuchiol (天然萃取)'], note: '刺激性低",
    "ingredients: ['Bakuchiol (天然萃取)'], products: ['Bybi Bakuchiol Booster', 'The Inkey List Bakuchiol Moisturizer', 'Honest Beauty Truly Defying Serum', 'Youth To The People Superfood Air-Whip Moisture Cream', 'Cocokind Bakuchiol Face Oil'], note: '刺激性低"
))
replacements.append((
    "ingredients: ['Bakuchiol (plant extract)'], note: 'Lower irritation",
    "ingredients: ['Bakuchiol (plant extract)'], products: ['Bybi Bakuchiol Booster', 'The Inkey List Bakuchiol Moisturizer', 'Honest Beauty Truly Defying Serum', 'Youth To The People Superfood Air-Whip Moisture Cream', 'Cocokind Bakuchiol Face Oil'], note: 'Lower irritation"
))
replacements.append((
    "ingredients: ['Bakuchiol (extrait végétal)'], note: 'Moins irritant",
    "ingredients: ['Bakuchiol (extrait végétal)'], products: ['Bybi Bakuchiol Booster', 'The Inkey List Bakuchiol Moisturizer', 'Honest Beauty Truly Defying Serum', 'Youth To The People Superfood Air-Whip Moisture Cream', 'Cocokind Bakuchiol Face Oil'], note: 'Moins irritant"
))

# 5. Antioxidants products
replacements.append((
    "ingredients: ['Vitamin C (L-ascorbic acid)', 'Vitamin E (Tocopherol)', 'Ferulic Acid', 'Resveratrol', 'Niacinamide'], note: 'VitC+VitE+Ferulic Acid 三重",
    "ingredients: ['Vitamin C (L-ascorbic acid)', 'Vitamin E (Tocopherol)', 'Ferulic Acid', 'Resveratrol', 'Niacinamide'], products: ['SkinCeuticals C E Ferulic (業界黃金標準)', 'Drunk Elephant C-Firma Fresh Day Serum', \"Paula's Choice C15 Super Booster\", \"Kiehl's Powerful-Strength Line-Reducing Concentrate\", 'The Ordinary Ascorbyl Glucoside Solution 12%'], note: 'VitC+VitE+Ferulic Acid 三重"
))
replacements.append((
    "ingredients: ['Vitamin C (L-AA)', 'Vitamin E (Tocopherol)', 'Ferulic Acid', 'Resveratrol', 'Niacinamide'], note: 'VitC+VitE+Ferulic Acid triple",
    "ingredients: ['Vitamin C (L-AA)', 'Vitamin E (Tocopherol)', 'Ferulic Acid', 'Resveratrol', 'Niacinamide'], products: ['SkinCeuticals C E Ferulic (gold standard)', 'Drunk Elephant C-Firma Fresh Day Serum', \"Paula's Choice C15 Super Booster\", \"Kiehl's Powerful-Strength Line-Reducing Concentrate\", 'The Ordinary Ascorbyl Glucoside Solution 12%'], note: 'VitC+VitE+Ferulic Acid triple"
))
replacements.append((
    "ingredients: ['Vitamine C (L-AA)', 'Vitamine E (Tocophérol)', 'Acide férulique', 'Resvératrol'], note: 'Combo VitC",
    "ingredients: ['Vitamine C (L-AA)', 'Vitamine E (Tocophérol)', 'Acide férulique', 'Resvératrol'], products: ['SkinCeuticals C E Ferulic (référence sectorielle)', 'Drunk Elephant C-Firma Fresh Day Serum', \"Paula's Choice C15 Super Booster\", \"Kiehl's Powerful-Strength Line-Reducing Concentrate\", 'The Ordinary Ascorbyl Glucoside Solution 12%'], note: 'Combo VitC"
))

# 6. Humectants products
replacements.append((
    "ingredients: ['Hyaluronic Acid (玻尿酸)', 'Glycerin (甘油)', 'Panthenol (泛醇)', 'Sodium PCA', 'Urea'], note: '高分子 HA",
    "ingredients: ['Hyaluronic Acid (玻尿酸)', 'Glycerin (甘油)', 'Panthenol (泛醇)', 'Sodium PCA', 'Urea'], products: ['Neutrogena Hydro Boost Water Gel (玻尿酸代表作)', 'The Ordinary Hyaluronic Acid 2% + B5', 'LANEIGE Water Sleeping Mask', 'Hada Labo Gokujyun Premium Lotion (肌研極潤)', 'La Roche-Posay Hyalu B5 Serum'], note: '高分子 HA"
))
replacements.append((
    "ingredients: ['Hyaluronic Acid', 'Glycerin', 'Panthenol', 'Sodium PCA', 'Urea'], note: 'High-MW HA",
    "ingredients: ['Hyaluronic Acid', 'Glycerin', 'Panthenol', 'Sodium PCA', 'Urea'], products: ['Neutrogena Hydro Boost Water Gel (HA icon)', 'The Ordinary Hyaluronic Acid 2% + B5', 'LANEIGE Water Sleeping Mask', 'Hada Labo Gokujyun Premium Lotion', 'La Roche-Posay Hyalu B5 Serum'], note: 'High-MW HA"
))
replacements.append((
    "ingredients: ['Acide hyaluronique', 'Glycérine', 'Panthénol', 'Sodium PCA', 'Urée'], note: 'HA haute masse",
    "ingredients: ['Acide hyaluronique', 'Glycérine', 'Panthénol', 'Sodium PCA', 'Urée'], products: ['Neutrogena Hydro Boost Water Gel (icône HA)', 'The Ordinary Hyaluronic Acid 2% + B5', 'LANEIGE Water Sleeping Mask', 'Hada Labo Gokujyun Premium Lotion', 'La Roche-Posay Hyalu B5 Sérum'], note: 'HA haute masse"
))

# 7. Ceramides products
replacements.append((
    "ingredients: ['Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Cholesterol (膽固醇)', 'Fatty Acids (脂肪酸)'], note: '理想比例",
    "ingredients: ['Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Cholesterol (膽固醇)', 'Fatty Acids (脂肪酸)'], products: ['CeraVe Moisturizing Cream (三重神經醯胺代表)', 'CeraVe Hydrating Cleanser', 'Elizabeth Arden Eight Hour Cream', 'Dr. Jart+ Cicapair Tiger Grass Cream', 'Kiehl\'s Ultra Facial Cream'], note: '理想比例"
))
replacements.append((
    "ingredients: ['Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Cholesterol', 'Fatty Acids'], note: 'Ideal ratio",
    "ingredients: ['Ceramide NP', 'Ceramide AP', 'Ceramide EOP', 'Cholesterol', 'Fatty Acids'], products: ['CeraVe Moisturizing Cream (triple ceramide icon)', 'CeraVe Hydrating Cleanser', 'Elizabeth Arden Eight Hour Cream', 'Dr. Jart+ Cicapair Tiger Grass Cream', \"Kiehl's Ultra Facial Cream\"], note: 'Ideal ratio"
))
replacements.append((
    "ingredients: ['Céramide NP', 'Céramide AP', 'Cholestérol', 'Acides gras'], note: 'Ratio idéal",
    "ingredients: ['Céramide NP', 'Céramide AP', 'Cholestérol', 'Acides gras'], products: ['CeraVe Crème Hydratante (référence céramides)', 'CeraVe Nettoyant Hydratant', 'Elizabeth Arden Eight Hour Cream', 'Dr. Jart+ Cicapair Tiger Grass Cream', \"Kiehl's Ultra Facial Cream\"], note: 'Ratio idéal"
))

# 8. Emollients products
replacements.append((
    "ingredients: ['Squalane (角鯊烷)', 'Jojoba Oil', 'Dimethicone', 'Cetyl Alcohol'], note: '角鯊烷",
    "ingredients: ['Squalane (角鯊烷)', 'Jojoba Oil', 'Dimethicone', 'Cetyl Alcohol'], products: ['Biossance 100% Squalane Oil', 'The Ordinary 100% Plant-Derived Squalane', 'Kiehl\'s Midnight Recovery Concentrate', 'The INKEY List Squalane Oil', 'Tatcha The Dewy Skin Cream'], note: '角鯊烷"
))
replacements.append((
    "ingredients: ['Squalane', 'Jojoba Oil', 'Dimethicone', 'Cetyl Alcohol'], note: 'Squalane is lightweight",
    "ingredients: ['Squalane', 'Jojoba Oil', 'Dimethicone', 'Cetyl Alcohol'], products: ['Biossance 100% Squalane Oil', 'The Ordinary 100% Plant-Derived Squalane', \"Kiehl's Midnight Recovery Concentrate\", 'The INKEY List Squalane Oil', 'Tatcha The Dewy Skin Cream'], note: 'Squalane is lightweight"
))
replacements.append((
    "ingredients: ['Squalane', 'Huile de jojoba', 'Diméthicone', 'Alcool cétylique'], note: 'Le squalane",
    "ingredients: ['Squalane', 'Huile de jojoba', 'Diméthicone', 'Alcool cétylique'], products: ['Biossance 100% Squalane Oil', 'The Ordinary 100% Plant-Derived Squalane', \"Kiehl's Midnight Recovery Concentrate\", 'The INKEY List Squalane Oil', 'Tatcha The Dewy Skin Cream'], note: 'Le squalane"
))

# 9. Vitamin C products
replacements.append((
    "ingredients: ['L-Ascorbic Acid (純 VitC)', 'Ascorbyl Glucoside', 'Sodium Ascorbyl Phosphate', '3-O-Ethyl Ascorbate'], note: 'L-AA 效果",
    "ingredients: ['L-Ascorbic Acid (純 VitC)', 'Ascorbyl Glucoside', 'Sodium Ascorbyl Phosphate', '3-O-Ethyl Ascorbate'], products: ['SkinCeuticals C E Ferulic 15%', 'Drunk Elephant C-Firma 15%', 'Sunday Riley C.E.O. Brightening Serum', 'Timeless Vitamin C + E Ferulic Acid Serum', 'Melano CC Rohto Intensive Anti-Spot Essence'], note: 'L-AA 效果"
))
replacements.append((
    "ingredients: ['L-Ascorbic Acid (pure)', 'Ascorbyl Glucoside', 'Sodium Ascorbyl Phosphate', '3-O-Ethyl Ascorbate'], note: 'L-AA is most",
    "ingredients: ['L-Ascorbic Acid (pure)', 'Ascorbyl Glucoside', 'Sodium Ascorbyl Phosphate', '3-O-Ethyl Ascorbate'], products: ['SkinCeuticals C E Ferulic 15%', 'Drunk Elephant C-Firma 15%', 'Sunday Riley C.E.O. Brightening Serum', 'Timeless Vitamin C + E Ferulic Acid Serum', 'Melano CC Rohto Intensive Anti-Spot Essence'], note: 'L-AA is most"
))
replacements.append((
    "ingredients: ['Acide L-ascorbique (pur)', 'Ascorbyl Glucoside', 'Sodium Ascorbyl Phosphate'], note: 'La L-AA",
    "ingredients: ['Acide L-ascorbique (pur)', 'Ascorbyl Glucoside', 'Sodium Ascorbyl Phosphate'], products: ['SkinCeuticals C E Ferulic 15%', 'Drunk Elephant C-Firma 15%', 'Sunday Riley C.E.O. Brightening Serum', 'Timeless Vitamin C + E Ferulic Acid Serum', 'Melano CC Rohto Intensive Anti-Spot Essence'], note: 'La L-AA"
))

# 10. Niacinamide products
replacements.append((
    "ingredients: ['Niacinamide (Vit B3)'], note: '常見濃度 2–10%",
    "ingredients: ['Niacinamide (Vit B3)'], products: ['The Ordinary Niacinamide 10% + Zinc 1%', 'Paula\'s Choice 10% Niacinamide Booster', 'Good Molecules Discoloration Correcting Serum', 'COSRX Niacinamide 15% Face Serum', 'La Roche-Posay Pure Niacinamide 10 Serum'], note: '常見濃度 2–10%"
))
replacements.append((
    "ingredients: ['Niacinamide (Vitamin B3)'], note: 'Common range 2–10%",
    "ingredients: ['Niacinamide (Vitamin B3)'], products: ['The Ordinary Niacinamide 10% + Zinc 1%', \"Paula's Choice 10% Niacinamide Booster\", 'Good Molecules Discoloration Correcting Serum', 'COSRX Niacinamide 15% Face Serum', 'La Roche-Posay Pure Niacinamide 10 Serum'], note: 'Common range 2–10%"
))
replacements.append((
    "ingredients: ['Niacinamide (Vitamine B3)'], note: 'Dosage courant",
    "ingredients: ['Niacinamide (Vitamine B3)'], products: ['The Ordinary Niacinamide 10% + Zinc 1%', \"Paula's Choice 10% Niacinamide Booster\", 'Good Molecules Discoloration Correcting Serum', 'COSRX Niacinamide 15% Face Serum', 'La Roche-Posay Pure Niacinamide 10 Sérum'], note: 'Dosage courant"
))

# 11. Depigmenting products
replacements.append((
    "ingredients: ['Arbutin (熊果素)', 'Tranexamic Acid (傳明酸)', 'Kojic Acid (麴酸)', 'Azelaic Acid (杜鵑花酸)', 'Alpha Arbutin'], note: '各成分機制",
    "ingredients: ['Arbutin (熊果素)', 'Tranexamic Acid (傳明酸)', 'Kojic Acid (麴酸)', 'Azelaic Acid (杜鵑花酸)', 'Alpha Arbutin'], products: ['Shiseido White Lucent All Day Brightener', 'SK-II GenOptics Spot Essence', 'The Ordinary Alpha Arbutin 2% + HA', 'Envy Therapy 3% Tranexamic Acid Serum', 'The Inkey List Tranexamic Acid Serum'], note: '各成分機制"
))
replacements.append((
    "ingredients: ['Alpha Arbutin', 'Tranexamic Acid', 'Kojic Acid', 'Azelaic Acid', 'Ellagic Acid'], note: 'Different mechanisms",
    "ingredients: ['Alpha Arbutin', 'Tranexamic Acid', 'Kojic Acid', 'Azelaic Acid', 'Ellagic Acid'], products: ['Shiseido White Lucent All Day Brightener', 'SK-II GenOptics Spot Essence', 'The Ordinary Alpha Arbutin 2% + HA', 'Envy Therapy 3% Tranexamic Acid Serum', 'The Inkey List Tranexamic Acid Serum'], note: 'Different mechanisms"
))
replacements.append((
    "ingredients: ['Alpha-Arbutine', 'Acide tranexamique', 'Acide kojique', 'Acide azélaïque'], note: 'Mécanismes distincts",
    "ingredients: ['Alpha-Arbutine', 'Acide tranexamique', 'Acide kojique', 'Acide azélaïque'], products: ['Shiseido White Lucent All Day Brightener', 'SK-II GenOptics Spot Essence', 'The Ordinary Alpha Arbutin 2% + HA', 'Envy Therapy 3% Tranexamic Acid Serum', 'The Inkey List Tranexamic Acid Serum'], note: 'Mécanismes distincts"
))

# 12. Centella (Cica) products
replacements.append((
    "ingredients: ['Centella Asiatica Extract', 'Madecassoside', 'Asiaticoside', 'Asiatic Acid'], note: '廣受防護型",
    "ingredients: ['Centella Asiatica Extract', 'Madecassoside', 'Asiaticoside', 'Asiatic Acid'], products: ['Dr. Jart+ Cicapair Tiger Grass Cream', 'COSRX Centella Blemish Ampule', 'Purito Centella Green Level Unscented Sun', 'Klairs Midnight Blue Calming Cream', 'La Roche-Posay Cicaplast Baume B5'], note: '廣受防護型"
))
replacements.append((
    "ingredients: ['Centella Asiatica Extract', 'Madecassoside', 'Asiaticoside', 'Asiatic Acid'], note: '\"Cica\" is a marketing",
    "ingredients: ['Centella Asiatica Extract', 'Madecassoside', 'Asiaticoside', 'Asiatic Acid'], products: ['Dr. Jart+ Cicapair Tiger Grass Cream', 'COSRX Centella Blemish Ampule', 'Purito Centella Green Level Unscented Sun', 'Klairs Midnight Blue Calming Cream', 'La Roche-Posay Cicaplast Baume B5'], note: '\"Cica\" is a marketing"
))
replacements.append((
    "ingredients: ['Extrait de Centella Asiatica', 'Madécassoside', 'Asiaticoside'], note: '« Cica »",
    "ingredients: ['Extrait de Centella Asiatica', 'Madécassoside', 'Asiaticoside'], products: ['Dr. Jart+ Cicapair Tiger Grass Cream', 'COSRX Centella Blemish Ampule', 'Purito Centella Green Level Unscented Sun', 'Klairs Midnight Blue Calming Cream', 'La Roche-Posay Cicaplast Baume B5'], note: '« Cica »"
))

# 13. Calming products
replacements.append((
    "ingredients: ['Allantoin (尿囊素)', 'Bisabolol (紅沒藥醇)', 'Panthenol (泛醇)', 'Beta-Glucan', 'Oat Extract (燕麥萃取)'], note: '常用於術後",
    "ingredients: ['Allantoin (尿囊素)', 'Bisabolol (紅沒藥醇)', 'Panthenol (泛醇)', 'Beta-Glucan', 'Oat Extract (燕麥萃取)'], products: ['Aveeno Calm + Restore Nourishing Oat Serum', 'La Roche-Posay Toleriane Double Repair Moisturizer', 'Klairs Rich Moist Soothing Serum', 'First Aid Beauty Ultra Repair Cream (Oat)', 'Avène Cicalfate+ Restorative Protective Cream'], note: '常用於術後"
))
replacements.append((
    "ingredients: ['Allantoin', 'Bisabolol', 'Panthenol', 'Beta-Glucan', 'Oat Extract'], note: 'Common in post-procedure",
    "ingredients: ['Allantoin', 'Bisabolol', 'Panthenol', 'Beta-Glucan', 'Oat Extract'], products: ['Aveeno Calm + Restore Nourishing Oat Serum', 'La Roche-Posay Toleriane Double Repair Moisturizer', 'Klairs Rich Moist Soothing Serum', 'First Aid Beauty Ultra Repair Cream (Oat)', 'Avène Cicalfate+ Restorative Protective Cream'], note: 'Common in post-procedure"
))
replacements.append((
    "ingredients: ['Allantoïne', 'Bisabolol', 'Panthénol', 'Bêta-glucane', \"Extrait d'avoine\"], note: 'Fréquents",
    "ingredients: ['Allantoïne', 'Bisabolol', 'Panthénol', 'Bêta-glucane', \"Extrait d'avoine\"], products: ['Aveeno Calm + Restore Nourishing Oat Serum', 'La Roche-Posay Toleriane Double Repair Moisturizer', 'Klairs Rich Moist Soothing Serum', 'First Aid Beauty Ultra Repair Cream (Oat)', 'Avène Cicalfate+ Crème Réparatrice Protectrice'], note: 'Fréquents"
))

# 14. Sunscreen products
replacements.append((
    "ingredients: ['Zinc Oxide (氧化鋅)', 'Titanium Dioxide (二氧化鈦)', 'Avobenzone', 'Tinosorb M/S', 'Mexoryl'], note: 'SPF 對應 UVB",
    "ingredients: ['Zinc Oxide (氧化鋅)', 'Titanium Dioxide (二氧化鈦)', 'Avobenzone', 'Tinosorb M/S', 'Mexoryl'], products: ['Altruist SPF50 (高 CP 值)', 'La Roche-Posay Anthelios UVMune 400', 'Isntree Hyaluronic Acid Watery Sun Gel SPF50+', 'Biore UV Aqua Rich Watery Essence SPF50+', 'EltaMD UV Clear Broad-Spectrum SPF46'], note: 'SPF 對應 UVB"
))
replacements.append((
    "ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Avobenzone', 'Tinosorb M/S', 'Mexoryl SX/XL'], note: 'SPF = UVB",
    "ingredients: ['Zinc Oxide', 'Titanium Dioxide', 'Avobenzone', 'Tinosorb M/S', 'Mexoryl SX/XL'], products: ['La Roche-Posay Anthelios UVMune 400 Invisible Fluid', 'EltaMD UV Clear Broad-Spectrum SPF46', 'Isntree Hyaluronic Acid Watery Sun Gel SPF50+', 'Biore UV Aqua Rich Watery Essence SPF50+', 'Supergoop! Unseen Sunscreen SPF40'], note: 'SPF = UVB"
))
replacements.append((
    "ingredients: ['Oxyde de zinc', 'Dioxyde de titane', 'Avobenzone', 'Tinosorb M/S', 'Mexoryl'], note: 'SPF = UVB ; PA",
    "ingredients: ['Oxyde de zinc', 'Dioxyde de titane', 'Avobenzone', 'Tinosorb M/S', 'Mexoryl'], products: ['La Roche-Posay Anthelios UVMune 400 Invisible', 'EltaMD UV Clear Broad-Spectrum SPF46', 'Isntree Hyaluronic Acid Watery Sun Gel SPF50+', 'Biore UV Aqua Rich Watery Essence SPF50+', 'Supergoop! Unseen Sunscreen SPF40'], note: 'SPF = UVB ; PA"
))

# 15. BHA products
replacements.append((
    "ingredients: ['Salicylic Acid (水楊酸)'], note: '常見濃度 0.5–2%",
    "ingredients: ['Salicylic Acid (水楊酸)'], products: [\"Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant\", 'The Ordinary Salicylic Acid 2% Solution', 'Cetaphil DermaControl Oil Absorbing Moisturizer SPF30', 'COSRX BHA Blackhead Power Liquid', 'Stridex Medicated Pads (Maximum Strength)'], note: '常見濃度 0.5–2%"
))
replacements.append((
    "ingredients: ['Salicylic Acid'], note: 'Common range 0.5–2%",
    "ingredients: ['Salicylic Acid'], products: [\"Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant\", 'The Ordinary Salicylic Acid 2% Solution', 'Cetaphil DermaControl Oil Absorbing Moisturizer SPF30', 'COSRX BHA Blackhead Power Liquid', 'Stridex Medicated Pads (Maximum Strength)'], note: 'Common range 0.5–2%"
))
replacements.append((
    "ingredients: ['Acide salicylique'], note: 'Dosage courant 0,5–2 %",
    "ingredients: ['Acide salicylique'], products: [\"Paula's Choice Skin Perfecting 2% BHA Liquid Exfoliant\", 'The Ordinary Salicylic Acid 2% Solution', 'Cetaphil DermaControl Oil Absorbing Moisturizer SPF30', 'COSRX BHA Blackhead Power Liquid', 'Stridex Medicated Pads (Maximum Strength)'], note: 'Dosage courant 0,5–2 %"
))

# 16. Benzoyl Peroxide products
replacements.append((
    "ingredients: ['Benzoyl Peroxide (BPO)'], note: '常見 2.5–10%",
    "ingredients: ['Benzoyl Peroxide (BPO)'], products: ['Proactiv Emergency Blemish Relief (2.5% BPO)', 'PanOxyl Acne Foaming Wash 10% BPO', 'La Roche-Posay Effaclar Duo+ (5.5% BPO)', 'The Inkey List Succinic Acid Acne Treatment', 'Neutrogena On-the-Spot Acne Treatment (2.5% BPO)'], note: '常見 2.5–10%"
))
replacements.append((
    "ingredients: ['Benzoyl Peroxide (BPO)'], note: 'Common range 2.5–10%",
    "ingredients: ['Benzoyl Peroxide (BPO)'], products: ['Proactiv Emergency Blemish Relief (2.5% BPO)', 'PanOxyl Acne Foaming Wash 10% BPO', 'La Roche-Posay Effaclar Duo+ (5.5% BPO)', 'The Inkey List Succinic Acid Acne Treatment', 'Neutrogena On-the-Spot Acne Treatment (2.5% BPO)'], note: 'Common range 2.5–10%"
))
replacements.append((
    "ingredients: ['Peroxyde de benzoyle (BPO)'], note: 'Courant 2,5–10 %",
    "ingredients: ['Peroxyde de benzoyle (BPO)'], products: ['Proactiv Emergency Blemish Relief (2,5 % BPO)', 'PanOxyl Acne Foaming Wash 10 % BPO', 'La Roche-Posay Effaclar Duo+ (5,5 % BPO)', 'The Inkey List Succinic Acid Acne Treatment', 'Neutrogena On-the-Spot Acne Treatment (2,5 % BPO)'], note: 'Courant 2,5–10 %"
))

# 17. AHA products
replacements.append((
    "ingredients: ['Glycolic Acid (乙醇酸)', 'Lactic Acid (乳酸)', 'Mandelic Acid (杏仁酸)', 'Malic Acid'], note: '乙醇酸分子最小",
    "ingredients: ['Glycolic Acid (乙醇酸)', 'Lactic Acid (乳酸)', 'Mandelic Acid (杏仁酸)', 'Malic Acid'], products: [\"Paula's Choice Skin Perfecting 8% AHA Lotion\", 'The Ordinary Glycolic Acid 7% Toning Solution', 'Pixi Glow Tonic (Glycolic 5%)', 'Alpha-H Liquid Gold (Glycolic 5%)', 'Sunday Riley Good Genes All-in-One Lactic Acid Treatment'], note: '乙醇酸分子最小"
))
replacements.append((
    "ingredients: ['Glycolic Acid', 'Lactic Acid', 'Mandelic Acid', 'Malic Acid'], note: 'Glycolic: smallest molecule",
    "ingredients: ['Glycolic Acid', 'Lactic Acid', 'Mandelic Acid', 'Malic Acid'], products: [\"Paula's Choice Skin Perfecting 8% AHA Lotion\", 'The Ordinary Glycolic Acid 7% Toning Solution', 'Pixi Glow Tonic (Glycolic 5%)', 'Alpha-H Liquid Gold (Glycolic 5%)', 'Sunday Riley Good Genes All-in-One Lactic Acid Treatment'], note: 'Glycolic: smallest molecule"
))
replacements.append((
    "ingredients: ['Acide glycolique', 'Acide lactique', 'Acide mandélique', 'Acide malique'], note: 'Glycolique",
    "ingredients: ['Acide glycolique', 'Acide lactique', 'Acide mandélique', 'Acide malique'], products: [\"Paula's Choice Skin Perfecting 8% AHA Lotion\", 'The Ordinary Glycolic Acid 7% Toning Solution', 'Pixi Glow Tonic (Glycolique 5%)', 'Alpha-H Liquid Gold (Glycolique 5%)', 'Sunday Riley Good Genes All-in-One Lactic Acid Treatment'], note: 'Glycolique"
))

for old, new in replacements:
    if old in content:
        content = content.replace(old, new)
        print(f"OK: {old[:60]!r}")
    else:
        print(f"NOT FOUND: {old[:60]!r}")

# --- Add new Marketing branch ---
marketing_branch = """
  {
    id: 'marketing',
    color: '#e879f9',
    icon: 'fa-bullhorn',
    label: { zh: '行銷策略', en: 'Marketing', fr: 'Marketing' },
    angle: -210,
    leaves: [
      {
        id: 'consumer_insight',
        label: { zh: '消費者洞察', en: 'Consumer Insights', fr: 'Insights Consommateurs' },
        detail: {
          zh: {
            title: '消費者洞察 Consumer Insights', sub: '了解你的顧客',
            items: ['🎯 膚質分型：乾性 / 油性 / 混合 / 敏感 / 痘痘肌，是 SKU 規劃與溝通的基礎', '📊 肌膚煩惱排行：毛孔、暗沉、斑點、細紋是全球 Top 4 關注點', '👩 消費者旅程：認知→興趣→試用→回購→推薦（AISTDA），每階段需不同溝通策略', '🔍 Social Listening：監測 IG/TikTok/PTT 上的成分討論，識別下一個爆款成分', '💬 KOL/KOC 分層：百萬網紅（觸及廣）＋素人（信任度高）雙軌策略'],
          },
          en: {
            title: 'Consumer Insights', sub: 'Know your customer',
            items: ['🎯 Skin Type Segmentation: Dry / Oily / Combination / Sensitive / Acne-prone — basis for SKU planning', '📊 Top 4 Global Skin Concerns: Pores, Dullness, Spots, Fine Lines', '👩 Consumer Journey: Awareness→Interest→Trial→Repurchase→Advocacy (AISTDA)', '🔍 Social Listening: Monitor IG/TikTok for trending ingredients & brand sentiment', '💬 KOL/KOC Layering: Mega-influencer (reach) + Micro/Nano (trust & authenticity)'],
          },
          fr: {
            title: 'Insights consommateurs', sub: 'Connaître son client',
            items: ['🎯 Segmentation par type de peau : Sèche / Grasse / Mixte / Sensible / Acnéique', '📊 Top 4 préoccupations mondiales : Pores, Teint terne, Taches, Ridules', '👩 Parcours client : Découverte→Intérêt→Essai→Réachat→Recommandation', '🔍 Social Listening : surveiller IG/TikTok pour les ingrédients tendance', '💬 Stratégie KOL/KOC : mega-influenceurs (portée) + micro/nano (confiance)'],
          }
        }
      },
      {
        id: 'claim_strategy',
        label: { zh: '宣稱策略', en: 'Claim Strategy', fr: 'Stratégie Claims' },
        detail: {
          zh: {
            title: '宣稱策略 Claim Strategy', sub: '說到做到，做到才能說',
            items: ['📋 宣稱類型：功效宣稱（有效成分）、感官宣稱（膚感）、工藝宣稱（專利技術）', '⚖️ 宣稱合規：須有科學依據（in vitro/in vivo/消費者測試），避免絕對化字眼', '🔬 臨床實證分級：體外測試→動物實驗（限用）→人體試驗→消費者盲測', '🌐 各市場差異：歐盟 ISCC 指引、美國 FTC 廣告規範、台灣衛福部化妝品管理', '⭐ 黃金宣稱公式：「成分名稱 + 濃度/技術 + 可測量改善 + 測試時間」'],
          },
          en: {
            title: 'Claim Strategy', sub: 'Substantiate before you communicate',
            items: ['📋 Claim Types: Efficacy (active ingredients), Sensory (texture/feel), Technology (patent/method)', '⚖️ Claim Compliance: Must be substantiated — in vitro/in vivo/consumer studies; avoid absolute superlatives', '🔬 Evidence Hierarchy: In vitro → Human instrumental → Consumer blind test → Clinical RCT', '🌐 Market Differences: EU ISCC guidelines, US FTC advertising rules, local health authority standards', '⭐ Gold Formula: "Ingredient + Concentration/Tech + Measurable Improvement + Timeframe"'],
          },
          fr: {
            title: 'Stratégie des allégations', sub: 'Prouver avant de communiquer',
            items: ['📋 Types d\'allégations : Efficacité (actifs), Sensorielle (texture), Technologique (brevet)', '⚖️ Conformité : preuves scientifiques requises — in vitro/in vivo/tests consommateurs', '🔬 Hiérarchie des preuves : In vitro → Instrumental humain → Test en aveugle → ECR clinique', '🌐 Différences marchés : ISCC EU, FTC US, réglementations locales', '⭐ Formule or : "Actif + Concentration/Techno + Amélioration mesurable + Délai"'],
          }
        }
      },
      {
        id: 'channel_strategy',
        label: { zh: '通路與傳播', en: 'Channel & Media', fr: 'Canaux & Média' },
        detail: {
          zh: {
            title: '通路與傳播策略', sub: 'Where & How to Reach',
            items: ['📱 社群媒體：TikTok（抖音）主打成分教育 + 開箱；IG 視覺美學 + KOL 合作', '🏪 零售通路：藥妝店（Drug Store）vs 百貨專櫃 vs DTC（品牌官網） vs 電商（蝦皮/Shopee/Tmall）', '👩‍⚕️ 皮膚科 / 醫美通路：背書可信度高，適合訴求修護型、醫美級產品', '🎥 成分行銷：「成分派」消費者興起，透明原料表 + 濃度標示 = 高轉換', '📦 訂閱 & 美妝盒：Birchbox / Ipsy / 台灣 Pinkoi 訂閱盒，適合新品試用導流'],
          },
          en: {
            title: 'Channel & Media Strategy', sub: 'Where & How to Reach',
            items: ['📱 Social Media: TikTok — ingredient education + unboxing; IG — aesthetic content + KOL collabs', '🏪 Retail: Drug Store vs Department Store vs DTC (brand.com) vs E-commerce (Amazon/Shopee/Tmall)', '👩‍⚕️ Derm/Medi-Spa Channel: High credibility, best for clinical/repair positioning', '🎥 Ingredient Marketing: "Skintellectuals" demand formula transparency — INCI + %-disclosure drives conversion', '📦 Subscription Boxes: Birchbox/Ipsy/Sephora Play — ideal trial & awareness driver for new launches'],
          },
          fr: {
            title: 'Stratégie canaux et médias', sub: 'Où et comment toucher sa cible',
            items: ['📱 Réseaux sociaux : TikTok — éducation ingrédients + unboxing ; IG — esthétique + KOL', '🏪 Distribution : Pharmacie vs Grand magasin vs DTC vs E-commerce (Amazon/Tmall)', '👩‍⚕️ Canal dermo/médical : crédibilité maximale, idéal pour positionnement clinique', '🎥 Marketing ingrédients : les « skintellectuals » exigent transparence INCI + dosage', '📦 Boxes beauté : Birchbox/Ipsy — excellents pour l\'essai et la notoriété au lancement'],
          }
        }
      },
      {
        id: 'brand_storytelling',
        label: { zh: '品牌敘事', en: 'Brand Storytelling', fr: 'Storytelling Marque' },
        detail: {
          zh: {
            title: '品牌敘事 Brand Storytelling', sub: '科學 × 情感 × 身份認同',
            items: ['🧬 成分故事：每個明星成分都需要一個「起源故事」（實驗室研發 / 天然萃取 / 配方師靈感）', '❤️ 情感共鳴：皮膚與自信的連結（護膚 = 自我照護），超越產品功效的敘事層次', '🌱 品牌價值：潔淨（Clean）、永續（Sustainable）、包容（Inclusive）成為新護城河', '🏷️ 定位框架：奢華（La Mer）→ 大眾（CeraVe）→ 平替策略（The Ordinary 顛覆高端）', '📖 產品命名學：能傳達功效的名字（Retinol Storm / Hyaluronic Acid 2%）vs 詩意品牌名（Laneige）'],
          },
          en: {
            title: 'Brand Storytelling', sub: 'Science × Emotion × Identity',
            items: ['🧬 Ingredient Story: Every star ingredient needs an origin story (lab discovery / natural extract / formulator insight)', '❤️ Emotional Resonance: Skin-confidence connection — skincare as self-care transcends efficacy claims', '🌱 Brand Values: Clean, Sustainable, Inclusive are the new moats', '🏷️ Positioning: Luxury (La Mer) → Mass (CeraVe) → Disruption (The Ordinary democratizes premium)', '📖 Naming Science: Functional names (Retinol Storm / HA 2%) vs Poetic brand names (Laneige / Tatcha)'],
          },
          fr: {
            title: 'Storytelling de marque', sub: 'Science × Émotion × Identité',
            items: ['🧬 Histoire de l\'ingrédient : chaque actif star a besoin d\'une origin story (labo / nature / formulateur)', '❤️ Résonance émotionnelle : la peau comme vecteur de confiance — le soin comme rituel de soi', '🌱 Valeurs de marque : Clean, Durable, Inclusif — les nouveaux avantages concurrentiels', '🏷️ Positionnement : Luxe (La Mer) → Grand public (CeraVe) → Disruption (The Ordinary)', '📖 Naming : noms fonctionnels (Retinol Storm / HA 2%) vs noms poétiques (Laneige / Tatcha)'],
          }
        }
      },
      {
        id: 'launch_planning',
        label: { zh: '新品上市規劃', en: 'Launch Planning', fr: 'Plan de Lancement' },
        detail: {
          zh: {
            title: '新品上市規劃', sub: 'GTM Strategy for Beauty',
            items: ['📅 上市時程：T-6月（策略/成分鎖定）→ T-3月（內容製作/KOL簽約）→ T-1月（預熱/試用活動）→ T 日（上線/媒體報導）→ T+3月（數據優化/二波推廣）', '🎁 Trial Strategy：樣品贈送、訂閱盒合作、皮膚科診所試用包，降低嘗試門檻', '📊 KPI 設定：觸及率（Reach）/ 互動率（ER）/ 試用轉換率 / 回購率 / NPS 分數', '🌏 市場優先序：通常以台港澳 → 東南亞 → 日韓 → 歐美市場順序擴張（或反向進行 reverse premium）', '⚡ 成分熱度監測：Google Trends + TikTok 話題量 + 電商搜尋詞判斷成分時機'],
          },
          en: {
            title: 'Launch Planning', sub: 'GTM Strategy for Beauty',
            items: ['📅 Timeline: T-6mo (strategy/actives lock) → T-3mo (content/KOL sign) → T-1mo (teaser/sampling) → Launch Day (media/PR) → T+3mo (data optimization & wave 2)', '🎁 Trial Strategy: Sampling, subscription box partnerships, derm office trial kits — lower barrier to first use', '📊 KPIs: Reach / Engagement Rate / Trial-to-Purchase CVR / Repurchase Rate / NPS', '🌏 Market Sequencing: TW/HK → SEA → JP/KR → Western markets (or reverse-premium entry)', '⚡ Ingredient Trend Signals: Google Trends + TikTok hashtag volume + e-commerce search data'],
          },
          fr: {
            title: 'Plan de lancement', sub: 'Stratégie GTM beauté',
            items: ['📅 Calendrier : T-6m (stratégie/actifs) → T-3m (contenus/KOL) → T-1m (teaser/échantillons) → Jour J (médias/RP) → T+3m (optimisation/vague 2)', '🎁 Stratégie d\'essai : échantillons, partenariats boxes, kits dermatologues', '📊 KPIs : Portée / Taux d\'engagement / Taux de conversion essai→achat / Réachat / NPS', '🌏 Séquence marché : TW/HK → Asie du Sud-Est → JP/KR → Occident', '⚡ Signaux tendance : Google Trends + volume hashtag TikTok + données recherche e-commerce'],
          }
        }
      }
    ]
  }"""

# Insert before the closing ]; of BRANCHES
old_branches_end = "];\n\n/* ── STATE ── */"
new_branches_end = f",\n{marketing_branch}\n];\n\n/* ── STATE ── */"
if old_branches_end in content:
    content = content.replace(old_branches_end, new_branches_end)
    print("Marketing branch OK")
else:
    print("BRANCHES end NOT found")

# --- Update showDetail to render products ---
old_detail_render = """  if (d.note) {
    html += `<div class="detail-note">💡 ${d.note}</div>`;
  }"""
new_detail_render = """  if (d.products) {
    html += `<div class="detail-section"><h4>${L[lang].products}</h4>`;
    d.products.forEach(p => { html += `<span class="detail-chip" style="border-color:${color}44;color:#f1f5f9;">${p}</span>`; });
    html += '</div>';
  }
  if (d.note) {
    html += `<div class="detail-note">💡 ${d.note}</div>`;
  }"""
if old_detail_render in content:
    content = content.replace(old_detail_render, new_detail_render)
    print("showDetail products render OK")
else:
    print("showDetail render NOT found")

with open(fp, 'w', encoding='utf-8') as f:
    f.write(content)
print("\nFile saved successfully.")
