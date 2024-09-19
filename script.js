let currentLanguage = 'zh';

const translations = {
    zh: {
        title: '现代诗生成器',
        placeholder: '请输入一些词语',
        paragraphCount: '选择生成诗句的段数',
        generateBtn: '生成诗句',
        saveTextBtn: '保存为文本',
        saveImageBtn: '保存为图片'
    },
    en: {
        title: 'Modern Poem Generator',
        placeholder: 'Enter some words',
        paragraphCount: 'Select number of paragraphs',
        generateBtn: 'Generate Poem',
        saveTextBtn: 'Save as Text',
        saveImageBtn: 'Save as Image'
    }
};

function toggleLanguage() {
    currentLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
    document.getElementById('language-btn').innerText = currentLanguage === 'zh' ? '中文' : 'English';
    updatePageLanguage();
}

function updatePageLanguage() {
    document.querySelector('h1').innerText = translations[currentLanguage].title;
    document.getElementById('inputWords').setAttribute('placeholder', translations[currentLanguage].placeholder);
    document.getElementById('paragraphCount').setAttribute('placeholder', translations[currentLanguage].paragraphCount);
    document.querySelector('button[onclick="generatePoem()"]').innerText = translations[currentLanguage].generateBtn;
    document.querySelector('button[onclick="saveAsText()"]').innerText = translations[currentLanguage].saveTextBtn;
    document.querySelector('button[onclick="saveAsImage()"]').innerText = translations[currentLanguage].saveImageBtn;
}

// 默认页面加载时为中文
updatePageLanguage();

// 检测输入语言
function isChinese(text) {
    return /[\u4e00-\u9fa5]/.test(text); // 判断是否包含中文字符
}

// 生成诗句
function generatePoem() {
    const input = document.getElementById('inputWords').value;
    const words = input.split(',').map(word => word.trim()).filter(word => word.length > 0);
    const paragraphCount = parseInt(document.getElementById('paragraphCount').value);

    if (words.length === 0) {
        alert(currentLanguage === 'zh' ? '请输入至少1个词语来生成诗句！' : 'Please enter at least one word to generate a poem!');
        return;
    }

    // 判断用户输入的语言，选择模板
    const language = isChinese(words[0]) ? 'zh' : 'en';
    
    const templates = {
        zh: {
            1: [
                `${words[0]} 是我梦里的唯一景象。`,
                `在黑夜中，\n${words[0]} 是唯一的光。`,
                `${words[0]} 像一阵风，\n轻轻地拂过我的心。`,
                `${words[0]} 是我梦中的幻象。`,
                `${words[0]}，你是我唯一的思念。`,
                `${words[0]} 像风一般，轻轻掠过。`,
                `${words[0]}，像流星般消逝。`,
                `${words[0]} 是我心底的秘密。`,
                `${words[0]} 在时间的长河里，永不凋零。`,
                `${words[0]} 静静地守候着。`,
                `${words[0]} 如夜晚的星空般闪耀。`,
                `${words[0]}，总是让我不安。`,
                `${words[0]}，你是我的希望。`,
                `${words[0]} 轻轻流淌，带走了时光。`,
                `${words[0]}，是我遗忘的梦。`,
                `${words[0]}，在每个清晨呼唤我。`,
                `${words[0]} 像海浪般拍打着岸边。`,
                `${words[0]} 是一缕微风，吹散了烦恼。`,
                `${words[0]}，你从未远离过我。`,
                `${words[0]}，是我无法忘却的记忆。`,
                `${words[0]} 在黑夜中闪烁。`,
                `${words[0]} 是我追寻的方向。`,
                `${words[0]}，让我迷失在时间的河流中。`,
                `${words[0]} 是我心灵的避风港。`,
                `${words[0]} 轻轻一触，便消失于无形。`,
                `${words[0]}，带走了我的思绪。`,
                `${words[0]} 是我永远的守望。`,
                `${words[0]}，是我无法触及的梦想。`
            ],
            2: [
                `${words[0]} 与 ${words[1]} 相遇，\n它们诉说着无声的故事。`,
                `${words[0]} 藏在 ${words[1]} 的背后，\n等待着时间的流逝。`,
                `${words[0]} 是 ${words[1]} 的倒影，\n如同天与地的交汇。`,
                `${words[0]} 与 ${words[1]} 相遇，\n它们诉说着无声的故事。`,
                `${words[0]} 藏在 ${words[1]} 的背后，\n等待着时间的流逝。`,
                `${words[0]} 是 ${words[1]} 的倒影，\n如同天与地的交汇。`,
                `${words[0]} 和 ${words[1]}，永远是我的思念。`,
                `${words[0]} 静静地看着 ${words[1]}，不发一语。`,
                `${words[0]} 与 ${words[1]} 交织成梦。`,
                `${words[0]} 沉默着，而 ${words[1]} 在远方等待。`,
                `${words[0]} 随着 ${words[1]} 的流动，消散在风中。`,
                `${words[0]} 与 ${words[1]} 相遇，是命运的安排。`,
                `${words[0]} 是 ${words[1]} 的倒影，永不分离。`,
                `${words[0]} 在 ${words[1]} 中寻找归途。`,
                `${words[0]} 如 ${words[1]}，永远无法捕捉。`,
                `${words[0]} 和 ${words[1]}，在时间的缝隙中相逢。`,
                `${words[0]} 是 ${words[1]} 的呼唤。`,
                `${words[0]} 在 ${words[1]} 的怀抱中沉睡。`,
                `${words[0]} 和 ${words[1]} 一起消失在时间的尽头。`,
                `${words[0]} 轻轻拥抱 ${words[1]}，不留痕迹。`,
                `${words[0]} 和 ${words[1]} 的故事，写满了时光。`,
                `${words[0]}，你的身影藏在 ${words[1]} 的深处。`,
                `${words[0]}，你像 ${words[1]} 一样不可捉摸。`,
                `${words[0]} 是 ${words[1]} 的呢喃，在风中回荡。`,
                `${words[0]} 和 ${words[1]}，是我梦中的碎片。`,
                `${words[0]} 是 ${words[1]} 的回声，遥远而清晰。`,
                `${words[0]} 和 ${words[1]}，在无尽的夜色中徘徊。`,
                `${words[0]} 的出现，带走了 ${words[1]} 的忧伤。`,
                `${words[0]} 是 ${words[1]} 留下的痕迹。`,
                `${words[0]} 与 ${words[1]} 交织成一段永恒的诗篇。`,
                `${words[0]} 和 ${words[1]}，在无声中诉说着秘密。`
            ],
            3: [
                `${words[0]} 在 ${words[1]} 的怀抱中沉睡，\n${words[2]} 是他们的低语。`,
                `在 ${words[0]} 的眼中，\n${words[1]} 是永恒的，\n而 ${words[2]} 则消逝于风中。`,
                `${words[0]} 在 ${words[1]} 的怀抱中沉睡，\n${words[2]} 是他们的低语。`,
                `在 ${words[0]} 的眼中，\n${words[1]} 是永恒的，\n而 ${words[2]} 则消逝于风中。`,
                `${words[0]} 与 ${words[1]} 交汇，\n${words[2]} 成了这片梦境的回响。`,
                `${words[0]} 和 ${words[1]} 交织，\n${words[2]} 是它们的影子。`,
                `${words[0]} 藏在 ${words[1]} 的深处，\n等待 ${words[2]} 的到来。`,
                `${words[0]} 与 ${words[1]} 共舞，\n而 ${words[2]} 是它们的低语。`,
                `${words[0]} 在 ${words[1]} 的怀抱中沉睡，\n${words[2]} 是他们的梦。`,
                `${words[0]} 像 ${words[1]}，\n而 ${words[2]} 如风般吹过。`,
                `${words[0]} 和 ${words[1]} 一起，\n寻找着 ${words[2]} 的踪迹。`,
                `${words[0]} 是 ${words[1]} 的倒影，\n而 ${words[2]} 则是它的回声。`,
                `${words[0]} 和 ${words[1]} 并肩而行，\n${words[2]} 悄悄跟随其后。`,
                `${words[0]}，你的声音伴随 ${words[1]}，\n${words[2]} 在风中回响。`,
                `${words[0]} 随着 ${words[1]} 的脚步，\n${words[2]} 渐行渐远。`,
                `${words[0]} 与 ${words[1]} 相遇，\n${words[2]} 伴随着它们的步伐。`,
                `${words[0]} 在 ${words[1]} 的身边徘徊，\n${words[2]} 是它们的引路灯。`,
                `${words[0]} 的呼吸像 ${words[1]}，\n而 ${words[2]} 是最后的叹息。`,
                `${words[0]} 与 ${words[1]} 交错，\n${words[2]} 是这场梦的终结。`,
                `${words[0]} 依偎在 ${words[1]} 的怀抱中，\n${words[2]} 像轻风一样。`,
                `${words[0]} 是 ${words[1]} 的希望，\n而 ${words[2]} 却悄然离去。`,
                `${words[0]} 和 ${words[1]}，\n伴随着 ${words[2]} 远去。`,
                `${words[0]} 静静注视 ${words[1]}，\n${words[2]} 是未曾说出口的话。`,
                `${words[0]} 在 ${words[1]} 的光芒中，\n而 ${words[2]} 在等待奇迹。`,
                `${words[0]} 是 ${words[1]} 的倒影，\n${words[2]} 是这段旅程的终点。`,
                `${words[0]} 和 ${words[1]}，\n一同走向 ${words[2]} 的尽头。`,
                `${words[0]} 是一片宁静，\n而 ${words[1]} 和 ${words[2]}，\n是它的回响。`,
                `${words[0]} 和 ${words[1]} 交织，\n${words[2]} 则在远方徘徊。`,
                `${words[0]} 与 ${words[1]} 消失在黑夜中，\n只留下 ${words[2]} 的回声。`,
                `${words[0]} 像微风，\n${words[1]} 和 ${words[2]} 是它的尾声。`
                
            ],
            4: [
                `${words[0]} 与 ${words[1]} 同行，\n${words[2]} 与 ${words[3]} 呢喃，\n它们在这无尽的时间中徘徊。`,
                `${words[0]} 落入 ${words[1]} 的怀抱，\n${words[2]} 是一阵风，\n而 ${words[3]} 是远方的星光。`,
                `在 ${words[0]} 中找寻 ${words[1]}，\n却只看见 ${words[2]} 和 ${words[3]} 的影子。`,
                `${words[0]} 与 ${words[1]} 同行，\n${words[2]} 和 ${words[3]} 是他们的低语。`,
                `${words[0]} 伴随 ${words[1]} 的脚步，\n${words[2]} 与 ${words[3]} 渐行渐远。`,
                `${words[0]} 和 ${words[1]}，\n一起穿越 ${words[2]} 和 ${words[3]} 的梦境。`,
                `${words[0]} 在 ${words[1]} 的眼中，\n而 ${words[2]} 与 ${words[3]} 则在风中相遇。`,
                `${words[0]} 和 ${words[1]} 在黎明时相遇，\n${words[2]} 与 ${words[3]} 在黑暗中消逝。`,
                `${words[0]} 和 ${words[1]} 是过去，\n而 ${words[2]} 和 ${words[3]} 是未来。`,
                `${words[0]} 是 ${words[1]} 的影子，\n而 ${words[2]} 则像 ${words[3]} 的倒影。`,
                `${words[0]} 与 ${words[1]} 并肩而行，\n而 ${words[2]} 和 ${words[3]} 远远跟随。`
            ]
        },
        en: {
            1: [
                `${words[0]} is the only scene in my dreams.`,
                `In the night, \n${words[0]} is the only light.`,
                `${words[0]} moves like the wind, \ngently brushing through my heart.`,
                `${words[0]} is the only light in the endless darkness.`,
                `${words[0]} whispers softly through the night.`,
                `${words[0]} dances like a flame in the cold air.`,
                `${words[0]} moves through my dreams, leaving only silence.`,
                `${words[0]} is the echo of forgotten voices.`,
                `${words[0]} drifts like a cloud, untouchable and free.`,
                `${words[0]} is the rhythm of my heartbeat.`,
                `${words[0]} shines like the first morning star.`,
                `${words[0]} is the wind that carries away my thoughts.`,
                `${words[0]} glimmers in the distance, a hope not yet lost.`,
                `${words[0]} is the shadow that never leaves.`,
                `${words[0]} flows like water, slipping through my fingers.`,
                `${words[0]} hums in the stillness of the night.`,
                `${words[0]} rests quietly on the horizon, waiting.`,
                `${words[0]} is the quiet hum of the universe.`,
                `${words[0]} rises like the sun, bringing warmth to the cold.`,
                `${words[0]} is the star that guides me home.`,
                `${words[0]} falls like a leaf, slowly and softly.`,
                `${words[0]} lingers in the air, filling the silence.`,
                `${words[0]} echoes through the empty streets.`,
                `${words[0]} wraps around me like a gentle breeze.`,
                `${words[0]} stands alone, strong against the storm.`,
                `${words[0]} flickers like a candle in the wind.`,
                `${words[0]} holds the key to forgotten memories.`,
                `${words[0]} whispers of the past, a memory yet to fade.`
            ],
            2: [
                `${words[0]} meets ${words[1]}, \nthey tell a story without words.`,
                `${words[0]} hides behind ${words[1]}, \nwaiting for time to pass.`,
                `${words[0]} is the reflection of ${words[1]}, \nlike the meeting of heaven and earth.`,
                `${words[0]} meets ${words[1]}, \nthey tell a story without words.`,
                `${words[0]} hides behind ${words[1]}, \nwaiting for time to pass.`,
                `${words[0]} is the reflection of ${words[1]}, \nlike the meeting of heaven and earth.`,
                `${words[0]} and ${words[1]} are forever my thoughts.`,
                `${words[0]} quietly watches ${words[1]}, saying nothing.`,
                `${words[0]} and ${words[1]} intertwine into a dream.`,
                `${words[0]} remains silent, while ${words[1]} waits in the distance.`,
                `${words[0]} fades with the flow of ${words[1]}, disappearing into the wind.`,
                `${words[0]} meeting ${words[1]} is the arrangement of fate.`,
                `${words[0]} is the reflection of ${words[1]}, never to be separated.`,
                `${words[0]} searches for a way back through ${words[1]}.`,
                `${words[0]} is like ${words[1]}, always elusive.`,
                `${words[0]} and ${words[1]} meet in the gaps of time.`,
                `${words[0]} is the call of ${words[1]}.`,
                `${words[0]} sleeps in the embrace of ${words[1]}.`,
                `${words[0]} and ${words[1]} vanish together at the end of time.`,
                `${words[0]} gently embraces ${words[1]}, leaving no trace.`,
                `${words[0]} and ${words[1]}'s story is written in the passage of time.`,
                `${words[0]}, your figure is hidden deep in ${words[1]}.`,
                `${words[0]}, you are as elusive as ${words[1]}.`,
                `${words[0]} is the whisper of ${words[1]}, echoing in the wind.`,
                `${words[0]} and ${words[1]} are fragments of my dream.`,
                `${words[0]} is the echo of ${words[1]}, distant and clear.`,
                `${words[0]} and ${words[1]} wander in the endless night.`,
                `${words[0]} is the trace left by ${words[1]}.`,
                `${words[0]} and ${words[1]} intertwine into an eternal poem.`,
                `${words[0]} and ${words[1]} silently share their secrets.`
            ],
            3: [
                `${words[0]} sleeps in the arms of ${words[1]}, \n${words[2]} is their whisper.`,
                `In the eyes of ${words[0]}, \n${words[1]} is eternal, \nwhile ${words[2]} fades in the wind.`,
                `${words[0]} sleeps in the arms of ${words[1]}, \n${words[2]} is their whisper.`,
                `In the eyes of ${words[0]}, \n${words[1]} is eternal, \nwhile ${words[2]} fades in the wind.`,
                `${words[0]} and ${words[1]} converge, \n${words[2]} becomes the echo of this dream.`,
                `${words[0]} and ${words[1]} intertwine, \n${words[2]} is their shadow.`,
                `${words[0]} hides deep within ${words[1]}, \nwaiting for the arrival of ${words[2]}.`,
                `${words[0]} dances with ${words[1]}, \nwhile ${words[2]} is their whisper.`,
                `${words[0]} sleeps in the arms of ${words[1]}, \n${words[2]} is their dream.`,
                `${words[0]} is like ${words[1]}, \nand ${words[2]} passes like the wind.`,
                `${words[0]} and ${words[1]} together, \nsearching for the traces of ${words[2]}.`,
                `${words[0]} is the reflection of ${words[1]}, \nand ${words[2]} is its echo.`,
                `${words[0]} walks alongside ${words[1]}, \nwhile ${words[2]} quietly follows.`,
                `${words[0]}, your voice accompanies ${words[1]}, \nand ${words[2]} echoes in the wind.`,
                `${words[0]} follows the steps of ${words[1]}, \nwhile ${words[2]} fades into the distance.`,
                `${words[0]} meets ${words[1]}, \n${words[2]} follows their steps.`,
                `${words[0]} wanders beside ${words[1]}, \nwhile ${words[2]} lights their path.`,
                `${words[0]}'s breath is like ${words[1]}, \nand ${words[2]} is the final sigh.`,
                `${words[0]} and ${words[1]} cross paths, \n${words[2]} marks the end of this dream.`,
                `${words[0]} nestles in the arms of ${words[1]}, \nwhile ${words[2]} blows like a gentle breeze.`,
                `${words[0]} is the hope of ${words[1]}, \nand ${words[2]} quietly slips away.`,
                `${words[0]} and ${words[1]} drift away, \naccompanied by ${words[2]}.`,
                `${words[0]} quietly watches ${words[1]}, \nand ${words[2]} is the unspoken words.`,
                `${words[0]} stands in the light of ${words[1]}, \nand ${words[2]} awaits a miracle.`,
                `${words[0]} is the reflection of ${words[1]}, \nand ${words[2]} is the destination of this journey.`,
                `${words[0]} and ${words[1]} walk together, \nmoving towards the end with ${words[2]}.`,
                `${words[0]} is a moment of peace, \nwhile ${words[1]} and ${words[2]} \nare its echoes.`,
                `${words[0]} and ${words[1]} intertwine, \nwhile ${words[2]} wanders far away.`,
                `${words[0]} and ${words[1]} disappear into the night, \nleaving only the echo of ${words[2]}.`,
                `${words[0]} is like the breeze, \nwhile ${words[1]} and ${words[2]} are its fading song.`
            ],
            4: [
                `${words[0]} walks alongside ${words[1]}, \n${words[2]} whispers with ${words[3]}, \nthey wander through endless time.`,
                `${words[0]} walks alongside ${words[1]}, \n${words[2]} whispers with ${words[3]}, \nthey wander through endless time.`,
                `${words[0]} falls into the arms of ${words[1]}, \n${words[2]} is the wind, \nand ${words[3]} is the distant starlight.`,
                `In search of ${words[0]} through ${words[1]}, \nonly the shadows of ${words[2]} and ${words[3]} remain.`,
                `${words[0]} walks with ${words[1]}, \nwhile ${words[2]} and ${words[3]} whisper to each other.`,
                `${words[0]} follows the footsteps of ${words[1]}, \nwhile ${words[2]} and ${words[3]} fade into the distance.`,
                `${words[0]} and ${words[1]} \ntraverse the dreamscape of ${words[2]} and ${words[3]}.`,
                `${words[0]} is in the eyes of ${words[1]}, \nwhile ${words[2]} and ${words[3]} meet in the wind.`,
                `${words[0]} and ${words[1]} meet at dawn, \nwhile ${words[2]} and ${words[3]} vanish into the night.`,
                `${words[0]} and ${words[1]} are the past, \nwhile ${words[2]} and ${words[3]} are the future.`,
                `${words[0]} is the shadow of ${words[1]}, \nwhile ${words[2]} is the reflection of ${words[3]}.`,
                `${words[0]} walks alongside ${words[1]}, \nwhile ${words[2]} and ${words[3]} follow from afar.`
            ]
        }
    };

    let poem = '';

    // 根据段数生成多段诗句
    for (let i = 0; i < paragraphCount; i++) {
        const selectedTemplates = templates[language][words.length];
        const randomIndex = Math.floor(Math.random() * selectedTemplates.length);
        let generatedPoem = selectedTemplates[randomIndex];

        // 遍历输入的词语，并加粗这些词语
        words.forEach(word => {
            const boldWord = `<strong>${word}</strong>`;
            generatedPoem = generatedPoem.replace(word, boldWord);
        });

        poem += generatedPoem + '\n\n';
    }

    // 将生成的诗句展示出来
    document.getElementById('poem').innerHTML = poem.trim();
}
