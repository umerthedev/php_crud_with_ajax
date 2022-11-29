//ajax code for inserting data into database
$(document).ready(function () {
    //insert data
    $('#btnadd').click(function (e) {
        e.preventDefault();
        //console.log('button clicked');

        let id = $('#stid').val();
        let name = $('#name').val();
        let email = $('#email').val();
        let phone = $('#phone').val();
        let address = $('#address').val();
        let gender = $('#gender').val();
        let dob = $('#dob').val();
        let mydata = { id: id, name: name, email: email, phone: phone, address: address, gender: gender, dob: dob };
        $.ajax({
            url: 'insert.php',
            type: 'POST',
            data: mydata,
            success: function (data) {
                // console.log(data);
                $('#msg').html(data);
            }
        });
        $('#myform')[0].reset();
        $('#stid').val('');
        $('#name').focus();
        show_data();


    })

    // show data
    function show_data() {
        let output = '';

        $.ajax({
            url: 'show.php',
            method: 'get',
            dataType: 'json',
            success: function (data) {
                x = data;
                for (i = 0; i < x.length; i++) {
                    output += "<tr><td>" + x[i].id + "</td><td>" + x[i].name + "</td><td>" + x[i].cell + "</td><td>" + x[i].email + "</td><td>" + x[i].gender + "</td><td>" + x[i].dob + "</td><td>" + x[i].address + "</td><td><button class='btn btn-warning' id='btnedit' data-sid=" + x[i].id + ">Edit</button><button class='btn btn-danger' id='btndel' data-sid=" + x[i].id + ">Delete</button></td></tr>"
                }
                $('#tbody').html(output);


            }

        })

    }
    show_data();


    //delete data
    $('#tbody').on('click', '#btndel', function () {
        console.log('Delete button clicked');
        let id = $(this).attr('data-sid');
        console.log(id);
        let mydata = { id: id };
        mythis = this;
        $.ajax({
            url: 'delete.php',
            method: 'POST',
            data: mydata,
            success: function (data) {
                $('#msg').html(data);
                $(mythis).closest('tr').fadeOut(500);
            }

        })
    })

    //edit data
    $('#tbody').on("click", "#btnedit", function () {
        console.log('Edit button clicked');
        let id = $(this).attr('data-sid');
        console.log(id);
        mydata = { id: id };
        $.ajax({
            url: 'edit.php',
            method: 'POST',
            data: mydata,
            dataType: 'json',
            success: function (data) {
                // console.log(data);
                x = data;
                $('#stid').val(x.id);
                $('#name').val(x.name);
                $('#email').val(x.email);
                $('#phone').val(x.cell);
                $('#address').val(x.address);
                $('#gender').val(x.gender);
                $('#dob').val(x.dob);
                // $('#btnadd').hide();
                // $('#btnupdate').show();



            }
        })
    })


});
function myfun1() {
    let output = '';
    let given = $('#mytxt').val();
    mydata = { name: given };
    $.ajax({
        url: 'search.php',
        method: 'POST',
        data: mydata,
        dataType: 'json',
        success: function (data) {
            // console.log(data);
            x = data;
            for (i = 0; i < x.length; i++) {
                output += "<tr><td>" + x[i].id + "</td><td>" + x[i].name + "</td><td>" + x[i].cell + "</td><td>" + x[i].email + "</td><td>" + x[i].gender + "</td><td>" + x[i].dob + "</td><td>" + x[i].address + "</td><td><button class='btn btn-warning' id='btnedit' data-sid=" + x[i].id + ">Edit</button><button class='btn btn-danger' id='btndel' data-sid=" + x[i].id + ">Delete</button></td></tr>"
            }
            $('#tbody').html(output);
        }
    })
}