// 宝箱概率配置
const chestProbabilities = {
    1: [{ rarity: 'common', prob: 0.8 }, { rarity: 'rare', prob: 0.2 }],
    2: [{ rarity: 'rare', prob: 0.8 }, { rarity: 'epic', prob: 0.14 }, { rarity: 'legendary', prob: 0.05 }, { rarity: 'ancient', prob: 0.01 }],
    3: [{ rarity: 'ancient', prob: 0.8 }, { rarity: 'divine', prob: 0.14 }, { rarity: 'arcane', prob: 0.05 }, { rarity: 'celestial', prob: 0.01 }],
    4: [{ rarity: 'celestial', prob: 0.8 }, { rarity: 'infernal', prob: 0.14 }, { rarity: 'astral', prob: 0.05 }, { rarity: 'primeval', prob: 0.01 }],
    5: [{ rarity: 'primeval', prob: 0.8 }, { rarity: 'transcendental', prob: 0.14 }, { rarity: 'quantum', prob: 0.05 }, { rarity: 'ultimate', prob: 0.01 }],
    6: [{ rarity: 'ultimate', prob: 0.8 }, { rarity: 'chaos', prob: 0.14 }, { rarity: 'eternal', prob: 0.05 }, { rarity: 'void', prob: 0.01 }],
    7: [{ rarity: 'void', prob: 0.8 }, { rarity: 'genesis', prob: 0.14 }, { rarity: 'divineRealm', prob: 0.05 }, { rarity: 'apocalypse', prob: 0.01 }],
    8: [{ rarity: 'apocalypse', prob: 0.8 }, { rarity: 'yeyu1', prob: 0.14 }, { rarity: 'yeyu2', prob: 0.05 }, { rarity: 'yeyu3', prob: 0.01 }],
    9: [{ rarity: 'yeyu3', prob: 0.8 }, { rarity: 'yeyu4', prob: 0.14 }, { rarity: 'yeyu5', prob: 0.05 }, { rarity: 'yeyu6', prob: 0.01 }],
    10: [{ rarity: 'yeyu6', prob: 0.8 }, { rarity: 'yeyu7', prob: 0.14 }, { rarity: 'yeyu8', prob: 0.05 }, { rarity: 'yeyu9', prob: 0.01 }],
    11: [{ rarity: 'yeyu9', prob: 0.8 }, { rarity: 'yeyu10', prob: 0.14 }, { rarity: 'yeyu11', prob: 0.05 }, { rarity: 'yeyu12', prob: 0.01 }],
    12: [{ rarity: 'yeyu12', prob: 0.8 }, { rarity: 'yeyu13', prob: 0.14 }, { rarity: 'yeyu14', prob: 0.05 }, { rarity: 'yeyu15', prob: 0.01 }]
};