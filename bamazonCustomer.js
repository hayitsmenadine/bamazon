var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: "root",
	password: "",
	database: "bamazon"
});

connection.connect(function(err){
	if(err) throw err;

	start();
});

function start(){
	connection.query("SELECT * FROM products", function(err, results){
		if(err) throw err;

	inquirer
		.prompt([
		{
			name: "choice",
			type: "rawlist",
			choices: function(){
				var choiceArray = [];
				for(var i=0; i<results.length; i++){
					choiceArray.push(results[i].item_id);
				}
				return choiceArray;
			},
			message: "Which item would you like to buy?"
		},
		{
			name: "quantity",
			type: "input",
			message: "How many units would you like to buy?"
		}

			])
		.then(function(answer){
			var query = "SELECT department_name, stock_quantity, price FROM products WHERE ?"
		connection.query(query, { item_id: answer.id }, function(err, res) {

            if (res[0].stock_quantity >= answer.quantity) {

                var dept = res[0].DepartmentName;
                var adjustedQuantity = res[0].stock_quantity - answer.quantity;
                var purchasePrice = (answer.quantity * res[0].Price).toFixed(2);

                var query2 = " UPDATE products SET ? WHERE ?";
                connection.query(query2, [{ stock_quantity: adjustedQuantity }, { item_id: answer.id }],

                    function(err, res) {

                        if (err) throw err;
                        console.log("Success! Your total is $" + purchasePrice + "\nYour item(s) will be shipped to you in 3-5 business days.");
	});
				 if (res[0].stock_quantity = 0) {
                console.log("Sorry, there are " + res[0].stock_quantity + " units in stock for this product");

                start();
            }

}
		})
	
	})


})
}
