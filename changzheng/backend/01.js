// 长征事件数据
const eventsData = [
    {
        id: 1,
        title: "中央红军开始长征",
        date: "1934年10月",
        content: `
                <p>1934年10月，由于王明“左”倾教条主义的错误领导，中央红军在第五次反“围剿”中失败，被迫进行战略转移。</p>
                <p>从江西瑞金、于都等地出发，中央红军（红一方面军）踏上了漫漫长征路。最初的战略目标是前往湘西与红二、红六军团会合。</p>
                <p>长征初期，红军携带大量笨重物资，行动迟缓，遭受了重大损失。但英勇的红军战士们在极端困难的条件下，始终保持着坚定的革命信念。</p>
                <p>中央红军的长征，揭开了中国革命史上壮丽史诗的序幕，为中国革命保留了珍贵的火种。</p>
            `
    },
    {
        id: 2,
        title: "突破四道封锁线",
        date: "1934年10月—12月",
        content: `
                <p>中央红军长征初期，连续突破国民党军设置的四道封锁线。</p>
                <p>第一道封锁线位于江西信丰、安远一带，红军于1934年10月21日至25日突破。第二道封锁线在湖南汝城、广东仁化地区，红军于11月8日突破。</p>
                <p>第三道封锁线设在湖南宜章一带，红军于11月15日突破。最惨烈的是第四道封锁线——湘江战役。</p>
                <p>1934年11月27日至12月1日，红军在湘江两岸与国民党军展开了激烈战斗。经过五天五夜的血战，红军终于突破了湘江封锁线，但付出了极其惨重的代价，部队人数从出发时的8.6万余人锐减至3万余人。</p>
                <p>湘江战役的惨败，促使红军和党中央重新思考战略方针，为遵义会议的召开奠定了思想基础。</p>
            `
    },
    {
        id: 3,
        title: "遵义会议",
        date: "1935年1月15日—17日",
        content: `
                <p>1935年1月15日至17日，中共中央在贵州遵义召开政治局扩大会议。</p>
                <p>会议集中解决了当时具有决定意义的军事问题和组织问题，批判了王明“左”倾冒险主义在军事上的错误，肯定了毛泽东的军事战略主张。</p>
                <p>会议改组了中央领导机构，增选毛泽东为政治局常委，取消了博古和李德的最高军事指挥权。随后，成立了由毛泽东、周恩来、王稼祥组成的三人军事指挥小组，负责长征中的军事指挥。</p>
                <p>遵义会议确立了以毛泽东为代表的新的中央的正确领导，在极端危急的历史关头，挽救了党，挽救了红军，挽救了中国革命。这是中国共产党历史上一个生死攸关的转折点，标志着中国共产党在政治上开始走向成熟。</p>
            `
    },
    {
        id: 4,
        title: "四渡赤水",
        date: "1935年1月—3月",
        content: `
                <p>遵义会议后，中央红军在毛泽东等指挥下，于1935年1月至3月间，在川黔滇边界地区进行了灵活机动的运动战——四渡赤水。</p>
                <p>一渡赤水：1月29日，红军西渡赤水河，向古蔺、叙永地区前进，准备北渡长江。</p>
                <p>二渡赤水：2月18日至21日，红军掉头向东，二渡赤水河，重入贵州，奇袭娄山关，再占遵义城，取得了长征以来的最大胜利。</p>
                <p>三渡赤水：3月16日至17日，红军为调动国民党军，三渡赤水河，再次进入川南。</p>
                <p>四渡赤水：3月21日至22日，红军出其不意地四渡赤水河，南渡乌江，兵临贵阳，直逼昆明，然后向西北方向急进。</p>
                <p>四渡赤水战役，是毛泽东军事指挥艺术的得意之笔。红军在国民党军重兵围追堵截的情况下，灵活机动地穿插于敌人重兵集团之间，不断创造战机，在运动中大量歼灭敌人，牢牢地掌握了战场的主动权，取得了红军长征史上以少胜多、变被动为主动的光辉战例。</p>
            `
    },
    {
        id: 5,
        title: "巧渡金沙江",
        date: "1935年5月",
        content: `
                <p>四渡赤水后，中央红军乘胜南渡乌江，直逼贵阳，迫使国民党军调滇军增援贵阳，造成云南兵力空虚。</p>
                <p>1935年5月3日至9日，红军利用缴获的船只，在皎平渡等地巧渡金沙江。红军主力在七天七夜的时间里，全部渡过了金沙江。</p>
                <p>当国民党军追兵赶到时，红军已经毁船封江，远走高飞。至此，红军摆脱了几十万国民党军的围追堵截，取得了战略转移中具有决定意义的胜利。</p>
                <p>巧渡金沙江的成功，是红军长征中一次具有关键意义的行动，为红军继续北上陕北奠定了坚实基础。</p>
            `
    },
    {
        id: 6,
        title: "强渡大渡河、飞夺泸定桥",
        date: "1935年5月",
        content: `
                <p>渡过金沙江后，中央红军继续北上，向大渡河挺进。</p>
                <p>1935年5月24日至25日，红1军团第1师第1团在四川省安顺场强渡大渡河。由17勇士组成的突击队，在火力掩护下，乘小船奋勇前进，一举击溃川军守敌，控制了渡口。但由于船只有限，大部队无法迅速过河。</p>
                <p>为迅速渡过大渡河，红军两路夹河而进，向泸定桥奔袭。红4团一昼夜奔袭240里，于5月29日凌晨6时许到达并占领西桥头。</p>
                <p>泸定桥由十三根铁索横拉两岸，铁索上铺木板形成桥面，红军到达时，敌军已抽掉木板，只剩十三根铁索，并派重兵把守。</p>
                <p>5月29日下午4点，红4团发起总攻。由22名勇士组成的突击队踏索前进，穿过火墙，歼灭守敌，占领了东桥头。后续部队紧跟其后，迅速歼灭守敌，并掩护中央红军主力安全通过了泸定桥。</p>
                <p>强渡大渡河和飞夺泸定桥的胜利，打破了国民党军妄图把红军变成第二个石达开的反革命迷梦，为红军北上陕北铺平了道路。</p>
            `
    },
    {
        id: 7,
        title: "翻越夹金山",
        date: "1935年6月",
        content: `
                <p>1935年6月，中央红军离开大渡河地区，向川西北前进，开始翻越长征途中的第一座大雪山——夹金山。</p>
                <p>夹金山海拔4000多米，终年积雪，空气稀薄，天气变幻无常。红军战士们身着单衣，脚穿草鞋，在极端恶劣的条件下，奋勇向山顶攀登。</p>
                <p>山上寒风刺骨，积雪没过膝盖，许多战士因饥饿、寒冷和疲劳而牺牲。但红军战士们凭借着顽强的意志和革命乐观主义精神，相互搀扶，艰难前行。</p>
                <p>6月12日，中央红军先头部队终于翻过夹金山，在四川懋功（今小金县）地区与红四方面军胜利会师。两大主力红军的会师，使集结在这个地区的红军兵力达到10多万人，为粉碎国民党军的进攻，开创新的局面创造了有利条件。</p>
                <p>翻越夹金山的壮举，充分显示了红军战士们不畏艰难险阻的英雄气概和革命精神。</p>
            `
    },
    {
        id: 8,
        title: "过草地",
        date: "1935年8月—9月",
        content: `
                <p>1935年8月，红军分左右两路，从四川松潘出发，开始穿越荒无人烟的大草地。</p>
                <p>松潘草地位于青藏高原和四川盆地连接段的川西北草原，面积约1.52万平方公里，海拔在3500米以上。这里气候恶劣，昼夜温差大，雨雪冰雹频繁。草地里到处是淤黑色的死水潭，表面覆盖着一层草皮，下面是松软的泥浆，人一旦踏上去，就会陷入泥潭，难以自拔。</p>
                <p>红军战士们没有粮食，只能挖野菜、吃草根，甚至煮皮带充饥。许多战士因饥饿、寒冷、疾病和陷入泥潭而牺牲。</p>
                <p>在极端困难的情况下，红军战士们发扬了高度的革命团结精神，相互帮助，同甘共苦。他们以顽强的毅力和坚定的信念，历经艰辛，终于在1935年9月走出了草地。</p>
                <p>过草地的艰难历程，是红军长征中最为艰苦的一段行程之一。红军战士们用生命和鲜血谱写了一曲壮丽的英雄史诗，展现了革命理想高于天的崇高精神。</p>
            `
    },
    {
        id: 9,
        title: "红一方面军到达陕北",
        date: "1935年10月",
        content: `
                <p>1935年9月，中央红军突破腊子口，进入甘肃南部。10月19日，中央红军到达陕西吴起镇，与陕北红军胜利会师。</p>
                <p>至此，红一方面军长征结束，行程约二万五千里。</p>
                <p>红军到达陕北后，立即与陕北红军一起，粉碎了国民党军对陕北革命根据地的第三次“围剿”，巩固和扩大了陕北革命根据地，为党中央和红军长征的落脚点和抗日的出发点。</p>
                <p>红一方面军长征的胜利，标志着中国共产党和红军从挫折走向胜利的伟大转折，为中国革命的最终胜利奠定了坚实基础。</p>
            `
    },
    {
        id: 10,
        title: "三大主力会师",
        date: "1936年10月",
        content: `
                <p>1936年7月上旬，红二、四方面军从甘孜出发，途经阿坝、包座等地，越过雪山草地，向在固原西部的红一方面军部队靠近。</p>
                <p>红二、四方面军于8月到达甘肃南部。1936年10月9日至22日，红二、四方面军先后在甘肃会宁、将台堡与红一方面军会师。</p>
                <p>三大主力红军的会师，标志着长征的胜利结束。长征的胜利，是中国革命转危为安的关键。它为实现抗日民族统一战线创造了条件，为中国革命的胜利奠定了坚实基础。</p>
                <p>红军长征的胜利，是人类历史上的奇迹。在整整两年的时间里，红军辗转十四省，突破几十万敌军的包围封锁，战胜无数的艰难险阻，终于实现了战略大转移。长征的胜利，是中国共产党和红军用鲜血、汗水和生命铸就的，是中华民族的宝贵精神财富。</p>
            `
    }
];

// DOM元素
const startBtn = document.getElementById('start-btn');
const homeSection = document.getElementById('home');
const timelineSection = document.getElementById('timeline');
const backToHomeBtn = document.getElementById('back-to-home');
const eventModal = document.getElementById('event-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModalBtn = document.getElementById('close-modal-btn');
const closeModal = document.getElementById('close-modal');
const eventBtns = document.querySelectorAll('.event-btn');
const timelineItems = document.querySelectorAll('.timeline-item');

// 页面滚动时的动画效果
const handleScrollAnimation = () => {
    timelineItems.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight * 0.85) {
            setTimeout(() => {
                item.classList.add('visible');
            }, index * 150);
        }
    });
};

// 显示事件详情
const showEventDetails = (eventId) => {
    const eventData = eventsData.find(event => event.id === eventId);
    if (eventData) {
        modalTitle.textContent = `${eventData.title} (${eventData.date})`;
        modalContent.innerHTML = eventData.content;

        // 显示模态框
        eventModal.classList.remove('opacity-0', 'pointer-events-none');
        eventModal.querySelector('div').classList.remove('scale-95');
        eventModal.querySelector('div').classList.add('scale-100');

        // 禁止页面滚动
        document.body.style.overflow = 'hidden';
    }
};

// 隐藏事件详情
const hideEventDetails = () => {
    // 隐藏模态框
    eventModal.classList.add('opacity-0', 'pointer-events-none');
    eventModal.querySelector('div').classList.remove('scale-100');
    eventModal.querySelector('div').classList.add('scale-95');

    // 恢复页面滚动
    document.body.style.overflow = 'auto';
};

// 切换到时间轴页面
startBtn.addEventListener('click', () => {
    homeSection.style.display = 'none';
    timelineSection.style.display = 'block';
    backToHomeBtn.classList.remove('opacity-0', 'pointer-events-none');

    // 触发滚动动画
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        handleScrollAnimation();
    }, 300);
});

// 返回首页
backToHomeBtn.addEventListener('click', () => {
    timelineSection.style.display = 'none';
    homeSection.style.display = 'flex';
    backToHomeBtn.classList.add('opacity-0', 'pointer-events-none');
});

// 显示事件详情
eventBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const eventId = parseInt(btn.getAttribute('data-event'));
        showEventDetails(eventId);
    });
});

// 关闭事件详情
closeModalBtn.addEventListener('click', hideEventDetails);
closeModal.addEventListener('click', hideEventDetails);

// 点击模态框背景关闭
eventModal.addEventListener('click', (e) => {
    if (e.target === eventModal) {
        hideEventDetails();
    }
});

// 键盘ESC关闭模态框
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !eventModal.classList.contains('pointer-events-none')) {
        hideEventDetails();
    }
});

// 页面滚动时的动画
window.addEventListener('scroll', handleScrollAnimation);

// 初始化页面
window.addEventListener('load', () => {
    // 确保页面加载完成后再设置初始状态
    timelineSection.style.display = 'none';
    backToHomeBtn.classList.add('opacity-0', 'pointer-events-none');
});