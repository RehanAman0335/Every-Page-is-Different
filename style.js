function product1()
{
    var pro_name = document.getElementById("products").value;
    var pro_img = document.getElementById("img1").src;
    var pro_title = document.getElementById("title_name1").innerHTML;
    var pro_price = document.getElementById("Price_name1").innerHTML;
    var pro_des = document.getElementById("des_name1").innerHTML;

    if(pro_name == "Iphone12")
    {
        //document.getElementById("products").value;
        document.getElementById("img1").src = "https://techprice.pk/wp-content/uploads/2023/01/Apple-IPhone-12-Mini-2.webp";
        document.getElementById("title_name1").innerHTML = "Iphone 12";
        document.getElementById("Price_name1").innerHTML = "500 $";
        document.getElementById("des_name1").innerHTML= "new model";
    }

    else if(pro_name == "Iphone11")
    {
document.getElementById("img1").src = "https://techprice.pk/wp-content/uploads/2023/01/Apple-iPhone-11-Pro-2.webp";
        document.getElementById("title_name1").innerHTML = "Iphone 11";
        document.getElementById("Price_name1").innerHTML = "400 $";
        document.getElementById("des_name1").innerHTML= "new model";
    }


    else if(pro_name == "Iphone10")
    {
        document.getElementById("img1").src = "https://mobimania.si/wp-content/uploads/2019/02/iphone-x-xs-300x300.jpg";
        document.getElementById("title_name1").innerHTML = "Iphone 10";
        document.getElementById("Price_name1").innerHTML = "300 $";
        document.getElementById("des_name1").innerHTML= "new model";
    }
}

function product2()
{
    var pro_name = document.getElementById("products").value;
    var pro_img = document.getElementById("img2").src;
    var pro_title = document.getElementById("title_name2").innerHTML;
    var pro_price = document.getElementById("Price_name2").innerHTML;
    var pro_des = document.getElementById("des_name2").innerHTML;

    if(pro_name == "Iphone12")
    {
        //document.getElementById("products").value;
        document.getElementById("img2").src = "https://techprice.pk/wp-content/uploads/2023/01/Apple-IPhone-12-Mini-2.webp";
        document.getElementById("title_name2").innerHTML = "Iphone 12";
        document.getElementById("Price_name2").innerHTML = "500 $";
        document.getElementById("des_name2").innerHTML= "new model";
    }

    else if(pro_name == "Iphone11")
    {
document.getElementById("img2").src = "https://techprice.pk/wp-content/uploads/2023/01/Apple-iPhone-11-Pro-2.webp";
        document.getElementById("title_name2").innerHTML = "Iphone 11";
        document.getElementById("Price_name2").innerHTML = "400 $";
        document.getElementById("des_name2").innerHTML= "new model";
    }


    else if(pro_name == "Iphone10")
    {
        document.getElementById("img2").src = "https://mobimania.si/wp-content/uploads/2019/02/iphone-x-xs-300x300.jpg";
        document.getElementById("title_name2").innerHTML = "Iphone 10";
        document.getElementById("Price_name2").innerHTML = "300 $";
        document.getElementById("des_name2").innerHTML= "new model";
    }
}