import { v4 as uuidv4 } from "uuid";

function chillHop(){
    return [
        {
            name: "Cannot Get Enough",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/a0dcd19cea6c0c6d056b45170013a2368a8ca0bf-768x768.jpg",
            artist: "Montell Fish",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21747",
            color: ["#882C41","#FF9D5E"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Snaring River",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/1db4d2274604636097241aca0f7077594e95edc7-768x768.jpg",
            artist: "Moods",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=24694",
            color: ["#FEB389","#D54948"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Where The Sun Goes",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/6a9ef8ac00e168d3308fdf9e336874c03fab829d-768x768.jpg",
            artist: "Delayde, anybodyy",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23188",
            color: ["#5D71DF","#784ACC"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Cabaña",
            cover: "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-768x768.jpg",
            artist: "Juan Rios",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21647",
            color: ["#FC856B","#4C2945"],
            id: uuidv4(),
            active: false
        },
         {
            name: "Seeds for Tomorrow",
            cover: "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-768x768.jpg",
            artist: "Smile High, Teddy Roxpin",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=21648",
            color: ["#A8DAD7","#438992"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Solar Cove",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/d7ee494a68e5ff81082460680db4944f2ade6497-768x768.jpg",
            artist: "Mama Aiuto",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16179",
            color: ["#EA8C74","#D44847"],
            id: uuidv4(),
            active: false
        },
         {
            name: "Hereafter",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-768x768.jpg",
            artist: "Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11770",
            color: ["#2D5EA0","#E1A166"],
            id: uuidv4(),
            active: false
        },
    ]
}

export default chillHop;