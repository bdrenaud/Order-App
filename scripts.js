console.log("hello");


var items = [];

var itemInEdit;

//this will add item to list
function addItem(){
    var itemName = document.getElementById('itemName').value;
    console.log(itemName);
    var itemCost = document.getElementById('itemCost').value;
    console.log(itemCost);

    var randomId =  Math.floor(Math.random() * 1000) + 1;


    var newItem = {
        id: randomId,
        name: itemName,
        cost: itemCost
    }

    items.push(newItem);
    console.log(items);

    this.order.items.push(newItem);
    console.log(this.order);

    var row = document.createElement('tr');
    row.setAttribute("id", newItem.id);

    var colItemOne = document.createElement('td');
    //x.setAttribute("onclick", "editItem('" + newItem.id + "')");
    colItemOne.innerHTML = newItem.name;
    row.appendChild(colItemOne);

    var colItemTwo = document.createElement('td');
    colItemTwo.innerHTML = newItem.cost;
    row.appendChild(colItemTwo);

    var editCol = document.createElement('td');
    editCol.innerHTML = "<a class='btn btn-sm btn-primary' onclick='editItem("+newItem.id+")'>Edit</a>";
    //editCol.setAttribute("onclick", "editItem(" + newItem.id + ")");
    row.appendChild(editCol);

    var delCol = document.createElement('td');
    delCol.innerHTML = "<a class='btn btn-sm btn-danger' onclick='deleteFromList("+newItem.id+")'>Delete</a>";
    //a.setAttribute("onclick", "deleteFromList('" + newItem.id + "')");
    row.appendChild(delCol);

    document.getElementById('display').appendChild(row);

    document.getElementById('itemName').value = "";
    document.getElementById('itemCost').value = "";

}

// this will edit item in list
function editItem(val){
    var index = this.order.items.findIndex(x => x.id == val);
    if(index != -1){
        itemInEdit = this.order.items[index];
        
        var currentRow = document.getElementById(val);
        currentRow.innerHTML = "";

        var colItemOne = document.createElement('td');
        //x.setAttribute("onclick", "editItem('" + newItem.id + "')");
        colItemOne.innerHTML = "<input id='editAreaName' type='text' placeholder='"+ itemInEdit.name +"' />";
        currentRow.appendChild(colItemOne);
    
        var colItemTwo = document.createElement('td');
        colItemTwo.innerHTML = "<input id='editAreaCost' type='text' placeholder='"+ itemInEdit.cost +"' />";;
        currentRow.appendChild(colItemTwo);
    
        var editCol = document.createElement('td');
        editCol.innerHTML = "<a class='btn btn-sm btn-primary' onclick='saveItem("+ itemInEdit.id +")'>Save</a>";
        //editCol.setAttribute("onclick", "editItem(" + newItem.id + ")");
        currentRow.appendChild(editCol);
    
        var delCol = document.createElement('td');
        delCol.innerHTML = "<a class='btn btn-sm btn-info' onclick='cancel("+itemInEdit.id +")'>Cancel</a>";
        //a.setAttribute("onclick", "deleteFromList('" + newItem.id + "')");
        currentRow.appendChild(delCol); 
    }  
};

function saveItem(val) {
    var name = document.getElementById('editAreaName').value;
    var cost = document.getElementById('editAreaCost').value;
    var index = this.order.items.findIndex(x => x.id == val);
    if(index != -1){
        var itemFound = this.order.items[index];
        itemFound.name = name;
        itemFound.cost = cost;
        cancel(val);
    }
}

function cancel(val){
    var editArea = document.getElementById(val);
    editArea.remove();
    var index = this.order.items.findIndex(x => x.id == val);
    if(index != -1){
        var newItem = this.order.items[index];
        var row = document.createElement('tr');
        row.setAttribute("id", newItem.id);
    
        var colItemOne = document.createElement('td');
        //x.setAttribute("onclick", "editItem('" + newItem.id + "')");
        colItemOne.innerHTML = newItem.name;
        row.appendChild(colItemOne);
    
        var colItemTwo = document.createElement('td');
        colItemTwo.innerHTML = newItem.cost;
        row.appendChild(colItemTwo);
    
        var editCol = document.createElement('td');
        editCol.innerHTML = "<a class='btn btn-sm btn-primary' onclick='editItem("+newItem.id+")'>Edit</a>";
        //editCol.setAttribute("onclick", "editItem(" + newItem.id + ")");
        row.appendChild(editCol);
    
        var delCol = document.createElement('td');
        delCol.innerHTML = "<a class='btn btn-sm btn-danger' onclick='deleteFromList("+newItem.id+")'>Delete</a>";
        //a.setAttribute("onclick", "deleteFromList('" + newItem.id + "')");
        row.appendChild(delCol);
    
        document.getElementById('display').appendChild(row);
    
        document.getElementById('itemName').value = "";
        document.getElementById('itemCost').value = "";
        console.log(this.order)
    }
}

function deleteFromList(val){
    var displayArea = document.getElementById(val);
    displayArea.remove();
    var index = this.order.items.findIndex(x => x.id == val);
    if(index != -1){
        this.order.items.splice(index);
    }
}






