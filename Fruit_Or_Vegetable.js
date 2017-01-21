function food(input) {
    var text = input[0]
   if (text == "banana" || text == "apple" || text == "kiwi" || text == "cherry" || text == "lemon"
       || text == "grapes" || text == "peach")
   {
       console.log("fruit")
   }
    else if (text == "tomato" || text == "cucumber" || text == "pepper" || text == "onion" || text == "garlic"
       || text == "parsley"){
        console.log("vegetable")
   }
   else {
       console.log("unknown")
   }


}

food(["cat"])