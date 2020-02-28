$(document).ready(function() {
  $("form#form").submit(function(eveht) {
    event.preventDefault()
    var item1 = $("input#item1").val()
    var item2 = $("input#item2").val()
    var item3 = $("input#item3").val()
    var item4 = $("input#item4").val()
    var item5 = $("input#item5").val()
    var item6 = $("input#item6").val()
    var item7 = $("input#item7").val()

    var groceryItems = [item1, item2, item3, item4, item5, item6, item7]

    var newGroceryItems = groceryItems.sort().map(function(groceryItem) {
      return groceryItem.toUpperCase()
    })

    console.log(newGroceryItems)
 
  });
});