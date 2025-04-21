Vue.createApp({
    data(){
        return{
            detail:{},
            dialogInstance : null,
            buildings:[
                {
                    title : 'Taipei 101',
                    url : 'https://maps.app.goo.gl/2Eee6g4VL2snf9sa7',
                    img : 'img/buildings/101.webp',
                    content : 'Taipei 101 is located in Xinyi District, Taipei, Taiwan. Standing at 508 meters tall with 101 above-ground and 5 underground floors, it held the title of the world’s tallest building from 2004 to 2010. Its design blends modern engineering with traditional Eastern aesthetics; the bamboo-like appearance symbolizes strength and steady growth. Inside, it features offices, a department store, food courts, and an observatory. It is a landmark that combines business, leisure, and tourism, attracting visitors from around the world.'
                },
                {
                    title : 'National Chiang Kai-shek Memorial Hall',
                    url : 'https://maps.app.goo.gl/Z1iqmHZCoJn7sW8CA',
                    img : 'img/buildings/MemorialHall.jpg',
                    content : 'The Chiang Kai-shek Memorial Hall, located in Zhongzheng District, Taipei, is a major landmark built to honor former President Chiang Kai-shek. The architecture features traditional Chinese palace elements, with blue-tiled roofs and white walls symbolizing freedom and justice. In front lies Liberty Square, flanked by the National Theater and Concert Hall, making it a hub for cultural events and public gatherings. Inside the hall are a large statue of Chiang and historical exhibitions, offering insights into Taiwan\'s modern history.'
                },
                {
                    title : 'Chikan Tower',
                    url : 'https://maps.app.goo.gl/wwX7EJwoFpwdD4jh6',
                    img : 'img/buildings/ChikanTower.jpg',
                    content : 'Chihkan Tower, located in the West Central District of Tainan, was originally built by the Dutch in 1653 as Fort Provintia. It is one of the oldest Western-style buildings still standing in Taiwan. After being taken over by Koxinga and later rebuilt during the Qing Dynasty, it showcases a blend of Western and Chinese architecture. Now a historic monument, it features stone tablets, ancient artifacts, and nine turtle-shaped steles, reflecting Taiwan’s rich cultural and historical layers. It is a major tourist attraction in Tainan.'
                },
                {
                    title : 'Fort San Domingo',
                    url : 'https://maps.app.goo.gl/mvbHivp97GzijDrC7',
                    img : 'img/buildings/FortSanDomingo.jpg',
                    content : 'Fort San Domingo, located in Tamsui District, New Taipei City, was originally built by the Spanish in 1629 and later rebuilt by the Dutch, who named it “Fort San Domingo.” It served as an important military base and was later used as a consulate during the Qing and British periods. The architecture blends European colonial and local styles and is now preserved as a historic site. Perched on a hill, it offers panoramic views of the Tamsui River estuary and remains one of Tamsui’s most iconic historic attractions.'
                },
                {
                    title : 'GRAND HOTEL TAIPEI',
                    url : 'https://maps.app.goo.gl/VRQXpqTdWG5oxZTeA',
                    img : 'img/buildings/GRANDHOTELTAIPEI.jpg',
                    content : 'The Grand Hotel Taipei, located in the Yuanshan area of Zhongshan District, was built in 1952 under the direction of President Chiang Kai-shek as a symbol of Chinese culture and national pride. Featuring traditional Chinese palace-style architecture, the hotel is adorned with red columns and golden tiles, showcasing majestic elegance. It has hosted numerous world leaders and dignitaries, making it one of Taiwan’s most iconic five-star hotels. The hotel also houses secret tunnels and cultural exhibits, making it a must-visit for tourists and history lovers.'
                },
                {
                    title : 'National Palace Museum',
                    url : 'https://maps.app.goo.gl/7trWEFMj4xLq338k7',
                    img : 'img/buildings/NationalPalaceMuseum.jpg',
                    content : 'The National Palace Museum, located in Shilin District, Taipei, houses over 700,000 artifacts from China’s imperial past, making it one of the world’s most significant collections of Chinese art and culture. Many treasures were originally part of the Beijing Forbidden City’s collection, including paintings, ceramics, jade, bronzes, and more, representing over 5,000 years of Chinese civilization. The museum building blends traditional Chinese and modern architecture. It serves as a major center for academic research and tourism, drawing millions of visitors each year.'
                }
            ],
            attractions:[
                {
                    title : 'The Queen\'s Head Rock',
                    url : 'https://maps.app.goo.gl/8tT9sXquhTGf4JRJ9',
                    img : 'img/attractions/queen.jpg',
                    content : 'Yehliu Geopark, located in Wanli District, New Taipei City, is famous for its unique rock formations shaped by natural erosion. The most iconic is the “Queen’s Head,” named for its resemblance to a queen’s profile. Formed over thousands of years by wind and sea, it has become one of Taiwan’s most recognizable natural landmarks. The park also features other formations like the “Candle Rock” and “Fairy’s Shoe,” making it a popular destination for both tourists and geology enthusiasts.'
                },
                {
                    title : 'Gaomei Wetland',
                    url : 'https://maps.app.goo.gl/okafa3LGheTZJfLNA',
                    img : 'img/attractions/GaomeiWetland.jpg',
                    content : 'Gaomei Wetlands, located in Qingshui District, Taichung, is a renowned ecological preserve in Taiwan, known for its diverse wildlife and expansive tidal flats. At sunset, the sky and sea merge in breathtaking views, making it a favorite among photographers. The area features a boardwalk allowing visitors to observe mudskippers, fiddler crabs, and other wetland creatures up close. Combining environmental education with eco-tourism, Gaomei Wetlands offers a unique experience of Taiwan’s natural beauty.'
                },
                {
                    title : 'Wuling Farm',
                    url : 'https://maps.app.goo.gl/9qcp67WSMCz71VPM9',
                    img : 'img/attractions/WulingFarm.jpg',
                    content : 'Wuling Farm, located in Heping District, Taichung, sits within Taiwan’s Central Mountain Range and is a popular highland destination year-round. Visitors come for cherry blossoms in spring, cool retreats in summer, maple leaves in autumn, and snowy views in winter. The farm grows peaches, alpine vegetables, and various flowers, and features scenic trails for hiking. With its pleasant climate and stunning landscapes, Wuling Farm is ideal for enjoying mountain nature and rural charm.'
                },
                {
                    title : 'Jiufen Old Street',
                    url : 'https://maps.app.goo.gl/mfprQ86uwqRCsXM36',
                    img : 'img/attractions/JiufenOldStreet.jpg',
                    content : 'Jiufen Old Street, located in Ruifang District, New Taipei City, is a nostalgic mountain town known for its gold mining past. The narrow streets are lined with teahouses, snack vendors, and craft shops. Local delicacies like taro balls and herbal rice cakes are especially popular. As lanterns light up at night, the atmosphere becomes even more enchanting. Jiufen gained fame from the film A City of Sadness and is often linked to Spirited Away, making it a top tourist destination in Taiwan.'
                },
                {
                    title : 'Beitou Hot Spring',
                    url : 'https://maps.app.goo.gl/9qrQaudmkRZ8z1gS7',
                    img : 'img/attractions/BeitouHotSpring.jpg',
                    content : 'Beitou Hot Springs, located in Beitou District, Taipei, is one of Taiwan’s most famous hot spring areas. It features various types of thermal waters, including sulfur and green sulfur springs. Developed during the Japanese colonial era, the area is rich in history and culture, with attractions like the Hot Spring Museum and Thermal Valley. Numerous hotels and bathhouses offer relaxing spa services, making Beitou a top destination for wellness, leisure, and hot spring enjoyment.'
                },
                {
                    title : 'Taroko Gorge',
                    url : 'https://maps.app.goo.gl/5N2dyxPi5bUEN9nZ6',
                    img : 'img/attractions/TarokoGorge.jpg',
                    content : 'Taroko Gorge, located in Hualien County, is the centerpiece of Taroko National Park and is famed for its majestic marble canyon. Carved by the Liwu River over millennia, the gorge features towering cliffs and dramatic landscapes. Popular attractions include Swallow Grotto, Eternal Spring Shrine, and the Shakadang Trail, making it ideal for hiking and nature exploration. With its stunning natural beauty and rich indigenous heritage, Taroko Gorge is one of Taiwan’s most popular outdoor destinations.'
                },
            ],
            foods:['img/foods/BeefNoodleSoup.jpg','img/foods/BraisedPorkonRice.jpg','img/foods/Chicken’sFeet.jpg','img/foods/GuaBao.jpg','img/foods/MangoShavedIce.jpg','img/foods/OysterOmelette.jpg','img/foods/Pig’sBloodCake.jpg','img/foods/PineappleCake.jpg','img/foods/StinkyTofu.jpg','img/foods/XiaoLongBao.jpg',]
        }
    },
    methods:{
        coverBtn(){
          const btns = document.querySelectorAll('.btn-custom');
          btns.forEach(btn => {
              btn.addEventListener('mousemove',e => {
                  const rect = btn.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width * 100;
                  const y = (e.clientY - rect.top) / rect.height * 100;
                  btn.style.setProperty('--x',`${x}%`)
                  btn.style.setProperty('--y',`${y}%`)
              });

              btn.addEventListener('mouseleave',e => {
                  btn.style.setProperty('--x',`300%`)
                  btn.style.setProperty('--y',`300%`)
              })
          })
        },
        goMap(data){
            console.log(data)
            window.open(`${data}`, '_blank');
        },
        openDialog(data){
            this.detail = data;
            this.dialogInstance = new bootstrap.Modal(this.$refs.dialog);
            this.dialogInstance.show();
        },
        foodWatchMore(){
            window.open(`https://tw.hotels.com/go/taiwan/best-taipei-local-food`,'_blank')
        },
        setObserver(){
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(z => {
                    if (z.isIntersecting){
                        z.target.classList.add('visible');
                        observer.unobserve(z.target);
                    }
                })
            },{threshold:0.2});
            document.querySelectorAll('.scroll-down').forEach(z => observer.observe(z));
        }
    },
    mounted(){
        this.setObserver();
        this.coverBtn();
    }
}).mount('#index')