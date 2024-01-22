//variaveis//
var position;
var contador = 0;
var dur; //duração tempo viagem
var descolagem= new Audio("../audio/descolagem.mp3");


window.onload = function () {

    updateLocalStorageValues();



    //esconder o formulario
    document.getElementById("forms").style.display = "none";

    memoria();



    //estrelas efeito parallax//
    for (i = 1; i <= 4; i++) {
        //alterar a posição incial de cada layer//
        switch (i) {
            case 1:
                position = 0;
                break;
            case 2:
                position = 100;
                break;
            case 3:
                position = 200;
                break;
            case 4:
                position = 300;
                break;
        }
        document.getElementById("layer" + i).style.backgroundPositionX = position + "px";
    }

    setInterval(function () {
        document.getElementById("layer1").style.backgroundPositionX = parseInt(document.getElementById("layer1").style.backgroundPositionX) - 8 + "px"
        document.getElementById("layer2").style.backgroundPositionX = parseInt(document.getElementById("layer2").style.backgroundPositionX) - 7 + "px"
        document.getElementById("layer3").style.backgroundPositionX = parseInt(document.getElementById("layer3").style.backgroundPositionX) - 6 + "px"
        document.getElementById("layer4").style.backgroundPositionX = parseInt(document.getElementById("layer4").style.backgroundPositionX) - 5 + "px"
    }, 40)


//formulário inicial//
    document.getElementById("buttonToForm").onclick = function () {
        document.getElementById("forms").style.display = "block";
        document.getElementById("randomText").style.display = "none";
        for (i = 1; i <= 5; i++) {
            document.getElementById("universe" + i).style.display = "none";
        }

        for (i = 5; i <= 8; i++) {
            //alterar a posição incial de cada layer//
            switch (i) {
                case 5:
                    position = 0;
                    break;
                case 6:
                    position = 100;
                    break;
                case 7:
                    position = 200;
                    break;
                case 8:
                    position = 300;
                    break;
            }
            document.getElementById("layer" + i).style.backgroundPositionX = position + "px";
        }

        setInterval(function () {
            document.getElementById("layer5").style.backgroundPositionX = parseInt(document.getElementById("layer5").style.backgroundPositionX) - 8 + "px"
            document.getElementById("layer6").style.backgroundPositionX = parseInt(document.getElementById("layer6").style.backgroundPositionX) - 7 + "px"
            document.getElementById("layer7").style.backgroundPositionX = parseInt(document.getElementById("layer7").style.backgroundPositionX) - 6 + "px"
            document.getElementById("layer8").style.backgroundPositionX = parseInt(document.getElementById("layer8").style.backgroundPositionX) - 5 + "px"
        }, 40)

    }


    document.getElementById('buttonForm').addEventListener('click', function() {
        validateForm()
    });

    //Textos da timeline//
    document.getElementById("data1").innerHTML = "1926";
    texto_timeline(1);
    document.getElementById("titulo1").innerHTML = "Goddard";
    document.getElementById("texto1").innerHTML = "Robert H. Goddard foi um físico americano que deixou um impacto duradouro no campo da exploração espacial. Nos anos 20 foi considerado um visionário e tornou-se o primeiro a conceber e construir com sucesso um foguete movido a combustível líquido. Goddard lançou o primeiro foguete, de 3,3 metros de altura, alimentado por combustível líquido em Auburn, Massachusetts, alcançando uma altitude modesta, mas marcando um feito histórico.";

    document.getElementById("data2").innerHTML = "1957";
    texto_timeline(2);
    document.getElementById("titulo2").innerHTML = "Sputnik-1";
    document.getElementById("texto2").innerHTML = "O Sputnik-1 foi o primeiro satélite artificial posto em órbita pela humanidade, em redor de um corpo celeste, neste caso da Terra. Lançado pela União Soviética foi o primeiro de uma série de satélites produzidos pelo Programa Sputnik, cujo objetivo consistia em estudar as propriedades das camadas superiores da atmosfera terrestre,  com vista à preparação de missões tripuladas.";

    document.getElementById("data3").innerHTML = "1961";
    texto_timeline(3);
    document.getElementById("titulo3").innerHTML = "Vostok 1";
    document.getElementById("texto3").innerHTML = "Foi a primeira missão do programa espacial soviético Vostok e a primeira missão espacial tripulada da História. O voo marcou a primeira vez que um ser humano foi ao espaço exterior e o primeiro voo orbital de uma nave tripulada. Ele consistiu de uma única órbita em torno da Terra, com a duração de 1h46min entre o lançamento e o pouso. Algumas especificações técnicas do foguetão: capacidade de tripulantes - 1 ; comprimento - 5 m ; diâmetro - 2,3 m; massa - 2 460 kg.";

    document.getElementById("data4").innerHTML = "1969";
    texto_timeline(4);
    document.getElementById("titulo4").innerHTML = "Apollo 10";
    document.getElementById("texto4").innerHTML = "Foi a quarta missão tripulada do Programa Apollo e a segunda a ir à Lua, onde testou o módulo lunar em órbita do satélite. No retorno à Terra, quebrou o recorde de velocidade no espaço por uma nave tripulada, mantido até hoje, ao atingir os 39 897 km/h, segundo o livro Guiness Book of Records. ";

    document.getElementById("data5").innerHTML = "1975";
    texto_timeline(5);
    document.getElementById("titulo5").innerHTML = "Cancelamento do Apollo";
    document.getElementById("texto5").innerHTML = "Antes de cancelarem o programa Apollo em 1975, os EUA ainda fizeram mais 5 pousos na Lua. Inicialmente iriam ter um vaivém de substituição parcialmente reutilizável, mas por motivos financeiros foi descartado.";

    document.getElementById("data6").innerHTML = "1986";
    texto_timeline(6);
    document.getElementById("titulo6").innerHTML = "Soyuz T-15";
    document.getElementById("texto6").innerHTML = "O foguetão Soyuz T-15 lançada e operada pela União Soviética acoplou com a estação espacial Mir, tornando-se assim a primeira nave espacial a visitar uma estação espacial em órbita. Foi uma missão espacial única que se destacou por ter sido possível transferir equipamentos e astronautas da estação Mir para outra estação espacial, a Salyut 7. A tripulação desta expedição espacial foram Leonid Kizim e Vladimir Solovyov, e teve uma duração de cerca de 125 dias.";

    document.getElementById("data7").innerHTML = "1998";
    texto_timeline(7);
    document.getElementById("titulo7").innerHTML = "ISS";
    document.getElementById("texto7").innerHTML = "A maior estação espacial já construída na história da humanidade, a Estação Espacial Internacional (ISS), foi lançada em órbita. A ISS é uma colaboração internacional envolvendo a NASA, a Agência Espacial Russa (Roscosmos), a ESA (Agência Espacial Europeia), a JAXA (Agência de Exploração Aeroespacial do Japão) e a CSA (Agência de Exploração Espacial do Canadá). Na Política Espacial Nacional dos Estados Unidos de 2010, foram atribuídas à ISS funções adicionais de servir objetivos comerciais, diplomáticos e educativos.";

    document.getElementById("data8").innerHTML = "2008";
    texto_timeline(8);
    document.getElementById("titulo8").innerHTML = "Falcon 1";
    document.getElementById("texto8").innerHTML = "A empresa SpaceX fundada por Elon Musk, alcançou um marco importante com o lançamento bem-sucedido do Falcon 1. Tornou-se assim o primeiro lançamento de um foguete orbital realizado por uma empresa privada. O Falcon 1 foi lançado pela primeira vez em 2006, mas a missão não obteve sucesso.";

    document.getElementById("data9").innerHTML = "2010";
    texto_timeline(9);
    document.getElementById("titulo9").innerHTML = "Programa Commercial Crew";
    document.getElementById("texto9").innerHTML = "A partir de 2010, foi inicializado uma importante colaboração entre a NASA e várias empresas privadas, o Programa Commercial Crew, com o propósito de desenvolverem a capacidade de transporte de tripulações para a Estação Espacial Internacional (ISS). Dentro deste programa, estão empresas que colaboraram com naves espaciais importantes tais como a SpaceX com o Crew Dragon e a Boeing com a CST-100 Starliner.";

    document.getElementById("data10").innerHTML = "2020";
    texto_timeline(10);
    document.getElementById("titulo10").innerHTML = "Missão Crew Dragon Demo-2";
    document.getElementById("texto10").innerHTML = "A missão  Crew Dragon Demo-2 foi feita pela SpaceX que lançou com sucesso a cápsula Crew Dragon com astronautas da NASA a bordo, estabelecendo assim o primeiro voo tripulado de uma nave espacial comercial.";

    //invocar a função do ano de nascimento do utilizador para a timeline//
    ano_avatar_timeline();


    // Texto aleatorio num array//
    texts = [
        "No vasto universo, as estrelas são como as palavras num livro cósmico, cada uma conta sua própria história de luz e tempo.",
        "O espaço, onde a escuridão revela a beleza, é o palco de descobertas infinitas que desafiam a nossa compreensão.",
        "A imensidão do espaço é um convite à imaginação, convida-nos a explorar os mistérios para além das estrelas."
    ];

    marqueeText = document.getElementById('randomText');

// Atualiza o texto aleatoriamente a cada intervalo//
    setInterval(function () {
        // Seleciona um texto aleatório dentro do array texts//
        randomIndex = parseInt(Math.random() * texts.length);
        console.log("Texto random:" + randomIndex)
        marqueeText.innerHTML = texts[randomIndex];
    }, 15000); // Muda a cada 5 segundos//


    //animação dos foguetes//

    //guarda numa variavel todos os elementos com class rocket "node list"//
    rockets = document.querySelectorAll(".rocket");

    window.onscroll = function () {


        triggerBottom = window.innerHeight / 5 * 4;

        // Para cada foguete no array de foguetes//
        rockets.forEach(rocket => {
            //distância entre o topo do elemento atual e o topo da janela de visualização//
            rocketTop = rocket.getBoundingClientRect().top;
            // se o topo do elemento for menor que a distância entre o topo da janela de visualização e o topo do elemento//
            if (rocketTop < triggerBottom) {
                rocket.classList.add("show");
            } else {
                rocket.classList.remove("show");
            }
        })
    }


    //parte das escalas//
    imagePaths = [
        '../images/venera9_satelite_escala.png',// 2m//
        '../images/starlink_satelite_escala.webp',// 7m//
        '../images/vostok_satelite_escala.png',// 25m//
        '../images/primeiro_foguetao_escala.png', // 38.36m//
        '../images/voskhod_segundo_foguetao_escala.png', // 44.45m//
        '../images/soyuz_terceiro_foguetao_escala.png',// 49.5m//
        '../images/angara5_setimo_foguetao_escala.webp',// 55.4m//
        '../images/falcon9_quinto_foguetao_escalal.png',// 70 m//
        '../images/saturnV_img4.png',// 110m//
    ];
    imageHeight = [
        "200",
        "500 ",
        "250 ",
        "380 ",
        "444",
        "495 ",
        "554 ",
        "700",
        "560",
    ];
    imageText = [
        "Venera9: 2m",
        "Starlink: 7m",
        "Vostok: 25m",
        "Vostok: 38.36m",
        "Voskhod: 44.45m",
        "Soyuz: 49.5m",
        "Angara5: 55.4m",
        "Falcon9: 70m",
        "SaturnV: 110m",
    ];


    window.addEventListener('keydown', function (event) {
        tecla = event.key;
        avatar = document.getElementById("img1Size");

        if (tecla === "ArrowRight") {

            document.getElementById("img2Size").classList.remove("instruction-div")

            contador++;
            console.log(contador)

            if (contador <= imagePaths.length) {
                imgSrc = imagePaths[contador - 1]; // -1 porque o array começa em 0//
                imgText = imageText[contador - 1];
                imgAlt = imageHeight[contador - 1];
            }

            if (contador === imagePaths.length) {
                contador = 0;
            }
                   document.getElementById('img2Size').innerHTML = "<img src='"+ imgSrc +"' width='auto' height='"+ imgAlt +"'/>";
                   document.getElementById('text2Size').innerHTML = imgText;

              alturaBoneco();

                   switch (contador) {
                           case 1:
                              alturaBoneco()
                           break;

                           case 2:
                               alturaBoneco()
                               document.getElementById("utiImgScale").style.width = "100px";
                               document.getElementById("utiImgScale").style.height = "100px";
                               break;

                           case 3:
                               alturaBoneco()
                               document.getElementById("utiImgScale").style.width = "20px";
                               document.getElementById("utiImgScale").style.height = "20px";
                               break;

                           case 4:
                               alturaBoneco()
                               document.getElementById("utiImgScale").style.width = "20px";
                               document.getElementById("utiImgScale").style.height = "20px";
                               break;

                           case 5:
                               alturaBoneco()
                               document.getElementById("utiImgScale").style.width = "20px";
                               document.getElementById("utiImgScale").style.height = "20px";
                               break;

                           case 6:
                               alturaBoneco()
                               document.getElementById("utiImgScale").style.width = "20px";
                               document.getElementById("utiImgScale").style.height = "20px";
                               break;

                           case 7:
                               alturaBoneco()
                               document.getElementById("utiImgScale").style.width = "20px";
                               document.getElementById("utiImgScale").style.height = "20px";
                               break;

                           case 8:
                               alturaBoneco()
                               document.getElementById("utiImgScale").style.width = "20px";
                               document.getElementById("utiImgScale").style.height = "20px";
                               break;

                           case 9:
                               alturaBoneco()
                               document.getElementById("utiImgScale").style.width = "20px";
                               document.getElementById("utiImgScale").style.height = "20px";
                               break;
                   }
        }



    });


    //Escala de distancias//
    document.getElementById("luaButton").onclick = function () {
        alteraImagem_planeta(1);
        dur=2;
        moveAviaoParaPlaneta();
        descolagem.play();
    }

    document.getElementById("marteButton").onclick = function () {
        alteraImagem_planeta(2);
        dur=3.5;
        moveAviaoParaPlaneta();
        descolagem.play();
    }

    document.getElementById("mercurioButton").onclick = function () {
        alteraImagem_planeta(3);
        dur=5;
        moveAviaoParaPlaneta();
        descolagem.play();
    }

    document.getElementById("venusButton").onclick = function () {
        alteraImagem_planeta(4);
        dur=3.8;
        moveAviaoParaPlaneta();
        descolagem.play();
    }

    document.getElementById("solButton").onclick = function () {
        alteraImagem_planeta(5);
        dur=8;
        moveAviaoParaPlaneta();
        descolagem.play();
    }



    //alterar imagen dos foguetões//
    document.getElementById("defaultButton").onclick = function () {
        alteraImagem_rocket(1);
    }
    document.getElementById("soyuzButton").onclick = function () {
        alteraImagem_rocket(2);
    }
    document.getElementById("saturnButton").onclick = function () {
        alteraImagem_rocket(3);
    }
    document.getElementById("falconButton").onclick = function () {
        alteraImagem_rocket(4);
    }
    document.getElementById("angaraButton").onclick = function () {
        alteraImagem_rocket(5);
    }


//Funcoes//

    //função para o tempo da escala das distâncias//
    function moveAviaoParaPlaneta() {

        foguete = document.getElementById("rocketScale");

        if (foguete) {
            foguete.style.position = "relative";
            //rocket.style.left = "0";
            foguete.style.bottom = "50%";
            foguete.style.transformOrigin = "bottom center";

            duration = 0 + dur;

            keyframes = [
                { transform: "translateX(-24vw) translateY(-5vh) rotate(0) scale(0.5)" },
                { transform: "translateX(0px) translateY(-100px) rotate(-5deg) scale(1)" },
                { transform: "translateX(22vw) translateY(-5vh) rotate(25deg) scale(0.5)" }
            ];

            timing = {
                duration: duration * 1000,
                easing: "linear",
                fill: "forwards"
            };

            foguete.animate(keyframes, timing);
        }

    }
    //altera imagen dos foguetões selecionáveis//
    function alteraImagem_rocket(nave) {

        switch (nave){
            case 1:
                document.getElementById("rocketship").src = "../images/o4 1.png";
                break;
            case 2:
                document.getElementById("rocketship").src = "../images/soyuz_.png";
                break;
            case 3:
                document.getElementById("rocketship").src = "../images/saturnv.png";
                break;
            case 4:
                document.getElementById("rocketship").src = "../images/falcon9.png";
                break;
            case 5:
                document.getElementById("rocketship").src = "../images/angara5.png";
                break;
        }
    }


    //função para as Escalas de distâncias entre a Terra e outros planetas//
    function alteraImagem_planeta(info) {

        switch (info) {
            case 1:
                document.getElementById("tempoViagem").innerHTML = "3 a 4 Dias";
                document.getElementById("imagem_chegada").src = "../images/chegada" + info + ".png";
                break;
            case 2:
                document.getElementById("tempoViagem").innerHTML = "180 a 270 Dias";
                document.getElementById("imagem_chegada").src = "../images/chegada" + info + ".png";
                break;
            case 3:
                document.getElementById("tempoViagem").innerHTML = "500 a 550 Dias";
                document.getElementById("imagem_chegada").src = "../images/chegada" + info + ".png";
                break;
            case 4:
                document.getElementById("tempoViagem").innerHTML = "270 a 300 Dias";
                document.getElementById("imagem_chegada").src = "../images/chegada" + info + ".png";
                break;
            case 5:
                document.getElementById("tempoViagem").innerHTML = "1200 a 1300 Dias";
                document.getElementById("imagem_chegada").src = "../images/chegada" + info + ".png";
                break;
        }
    }

    // Função para validar o formulário//
    function validateForm() {
        altura = document.getElementById('altForm').value;
        anoNascimento = document.getElementById('anoForm').value;
        genero = document.getElementById('generoForm').value;

        form = document.getElementById('forms');

        // Oculta todas as mensagens de erro
        document.getElementById('errorGenero').style.display = 'none';
        document.getElementById('errorAltura').style.display = 'none';
        document.getElementById('errorAno').style.display = 'none';

        // Define o estado de validação como verdadeiro
        isValid = true;

        // Validação da altura
        if (altura <= 0 || altura > 230) {
            document.getElementById('errorAltura').innerHTML = 'A altura deve estar entre 1 e 230 cm.';
            document.getElementById('errorAltura').style.display = 'block';
            isValid = false;
        }

        // Validação do ano de nascimento
        currentYear = new Date().getFullYear();
        if (anoNascimento <= 1900 || anoNascimento > currentYear) {
            document.getElementById('errorAno').innerHTML = 'Insira um ano de nascimento válido.';
            document.getElementById('errorAno').style.display = 'block';
            isValid = false;
        }

        // Validação adicional para o campo de gênero
        if (genero !== 'Masculino' && genero !== 'Feminino' && genero !== 'masculino' && genero !== 'feminino') {
            document.getElementById('errorGenero').innerHTML = 'Insira um género válido.';
            document.getElementById('errorGenero').style.display = 'block';
            isValid = false;
        }

        // Se a validação for bem-sucedida, esconde o formulário
        if (isValid === true) {
            form.style.display = 'none';
            for (i = 1; i <= 5; i++) {
                document.getElementById("universe" + i).style.display = "block";
            }

            // Atualiza os valores da local storage
            localStorage.setItem("userAlt", altura);
            localStorage.setItem("userAno", anoNascimento);
            localStorage.setItem("userGenero", genero);
            updateLocalStorageValues();
        }

        return isValid;
    }

    function memoria() {
        //ler os valores da local storage//
        Alt = localStorage.getItem("userAlt");
        Ano = localStorage.getItem("userAno");
        Genero = localStorage.getItem("userGenero");
    }

    //funcao para editar as caracteristicas da timeline//
    function texto_timeline(n){
        document.getElementById("data" + n).style.fontSize = "30px";
        document.getElementById("titulo" + n).style.fontSize = "25px";
        document.getElementById("titulo" + n).style.fontWeight = "Bold";
        document.getElementById("titulo" + n).style.color = "#CC0A11";
        document.getElementById("imagem" + n).src = "../images/imagem" + n + "_timeline.png";
    }

    //função para inserir o ano de nascimento do utilizador na timeline//
    function ano_avatar_timeline(){

        for (i = 0; i <= 10; i++) {

            if (localStorage.getItem("userGenero") === "Masculino" || localStorage.getItem("userGenero") === "masculino") {
                document.getElementById("imagem" + i + "utizador").src = "../images/guy.png";
            } else if (localStorage.getItem("userGenero") === "Feminino" || localStorage.getItem("userGenero") === "feminino") {
                document.getElementById("imagem" + i + "utizador").src = "../images/girl.png";
            }
            else {
                document.getElementById("imagem" + i + "utizador").src = "../images/guy.png";
            }


            document.getElementById("data" + i + "utizador").innerHTML = localStorage.getItem("userAno");
            document.getElementById("titulo" + i + "utizador").innerHTML = "O teu ano de nascimento";
            document.getElementById("texto" + i + "utizador").innerHTML = "Nasceste no ano de " + localStorage.getItem("userAno") + ", a partir daqui podes comparar todos os acontecimentos históricos relevantes para a exploração espacial com a tua data de nascimento.";

            document.getElementById("utilizador" + i).classList.add("d-none");
            document.getElementById("utilizador" + i +"2").classList.add("d-none");
            document.getElementById("middle" + i).classList.add("d-none");

            document.getElementById("data" + i + "utizador").style.fontSize = "30px";
            document.getElementById("titulo" + i + "utizador").style.fontSize = "25px";
            document.getElementById("titulo" + i + "utizador").style.fontWeight = "Bold";
            document.getElementById("titulo" + i + "utizador").style.color = "#CC0A11";
        }

        if (localStorage.getItem("userAno") <= 1926){
            document.getElementById("utilizador0").classList.remove("d-none");
            document.getElementById("utilizador02").classList.remove("d-none");
            document.getElementById("middle0").classList.remove("d-none");

        }
        else if (localStorage.getItem("userAno") > 1926 && localStorage.getItem("userAno") <= 1957){
            document.getElementById("utilizador1").classList.remove("d-none");
            document.getElementById("utilizador12").classList.remove("d-none");
            document.getElementById("middle1").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 1957 && localStorage.getItem("userAno") <= 1961){
            document.getElementById("utilizador2").classList.remove("d-none");
            document.getElementById("utilizador22").classList.remove("d-none");
            document.getElementById("middle2").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 1961 && localStorage.getItem("userAno") <= 1969){
            document.getElementById("utilizador3").classList.remove("d-none");
            document.getElementById("utilizador32").classList.remove("d-none");
            document.getElementById("middle3").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 1969 && localStorage.getItem("userAno") <= 1975 ){
            document.getElementById("utilizador4").classList.remove("d-none");
            document.getElementById("utilizador42").classList.remove("d-none");
            document.getElementById("middle4").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 1975 && localStorage.getItem("userAno") <= 1986){
            document.getElementById("utilizador5").classList.remove("d-none");
            document.getElementById("utilizador52").classList.remove("d-none");
            document.getElementById("middle5").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 1986 && localStorage.getItem("userAno") <= 1998){
            document.getElementById("utilizador6").classList.remove("d-none");
            document.getElementById("utilizador62").classList.remove("d-none");
            document.getElementById("middle6").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 1998 && localStorage.getItem("userAno") <= 2008){
            document.getElementById("utilizador7").classList.remove("d-none");
            document.getElementById("utilizador72").classList.remove("d-none");
            document.getElementById("middle7").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 2008 && localStorage.getItem("userAno") <= 2010){
            document.getElementById("utilizador8").classList.remove("d-none");
            document.getElementById("utilizador82").classList.remove("d-none");
            document.getElementById("middle8").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 2010 && localStorage.getItem("userAno") <= 2020){
            document.getElementById("utilizador09").classList.remove("d-none");
            document.getElementById("utilizador92").classList.remove("d-none");
            document.getElementById("middle9").classList.remove("d-none");
        }
        else if (localStorage.getItem("userAno") > 2020){
            document.getElementById("utilizador10").classList.remove("d-none");
            document.getElementById("utilizador102").classList.remove("d-none");
            document.getElementById("middle10").classList.remove("d-none");
        }
    }

    function alturaBoneco() {
        altAvatar = 0

        if (localStorage.getItem("userGenero") === 'Masculino' || localStorage.getItem("userGenero") === 'masculino') {
            //passar para metros em valor decimal
            altAvatar = parseFloat( parseInt(localStorage.getItem("userAlt") )/100)
            altAvatarPx = altAvatar * 100
            document.getElementById("img1Size").innerHTML ="<img id='utiImgScale' src='../images/guy.png' width='"+altAvatarPx+"' height='"+altAvatarPx+"'/>"
        }
        else if (localStorage.getItem("userGenero") === 'Feminino' || localStorage.getItem("userGenero") === 'feminino') {
            altAvatar = parseFloat( localStorage.getItem("userAlt") /100)
            altAvatarPx = altAvatar * 100
            document.getElementById("img1Size").innerHTML ="<img id='utiImgScale' src='../images/girl.png' width='"+altAvatarPx+"' height='"+altAvatarPx+"'/>"
        }
        document.getElementById("text1Size").innerHTML = altAvatar + "m";
    }
    function updateLocalStorageValues() {

        console.log(localStorage.getItem("userGenero"));
        introText = document.getElementById('introText');
        introText.innerHTML = '';
        typewriter = new Typewriter(introText, {
            loop: true
        });

        if (localStorage.getItem("userGenero") === 'Masculino' || localStorage.getItem("userGenero") === 'masculino') {
            typewriter
                .typeString('Bem-vindo ao LOCUS!')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Explora o Universo!')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Universo mais perto!')
                .pauseFor(2500)
                .deleteAll()
                .start();
        } else if (localStorage.getItem("userGenero") === 'Feminino' || localStorage.getItem("userGenero") === 'feminino') {
            typewriter
                .typeString('Bem-vinda ao LOCUS!')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Explora o Universo!')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Universo mais perto!')
                .pauseFor(2500)
                .deleteAll()
                .start();
        } else {
            // Se o gênero não estiver definido, exibir uma mensagem padrão//
            typewriter
                .typeString('Bem-vindo ao LOCUS!')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Explora o Universo!')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Universo mais perto!')
                .pauseFor(2500)
                .deleteAll()
                .start();
        }
        alturaBoneco()

        ano_avatar_timeline();
    }
}

