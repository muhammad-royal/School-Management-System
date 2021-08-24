$(document).ready(function () {
    Get();
    $("#myInput").on("input", function () {
        var value = $(this).val().toLowerCase();
        $("#studentTableBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});


function showStudentPopup() {

    $('#exampleModal').modal('show');
}

function showStudentPopup1() {

    $('#exampleModal1').modal('show');
}

/*function FillStudentId() {
    debugger
    $.get("http://localhost/WebAPI/studenta/FillStudentId/" + id, null, function (result) {

    });
}*/

function CheckStudentId() {
    debugger
    id = prompt("Enter the Student ID");
    if (id != null) {
        $.get("http://localhost/WebAPI/studenta/CheckStudentId/" + id, null, function (data) {

            if (data == "seccess") {
                showStudentPopup1();
                $.get("http://localhost/WebAPI/studenta/FillStudentId/" + id, null, function (result) {

                    debugger
                    $('#sss').empty();
                    $("#sss").append('<div class="form-group"><label for="exampleFormControlInput11">name</label><input type="text" class="form-control" id="exampleFormControlInput11" value="' + result.Name + '"></div>');
                    $("#sss").append('<div class="form-group"><label for="exampleFormControlInput22">Grade</label><input type="text" class="form-control" id="exampleFormControlInput22" value="' + result.grade + '"></div>');
                    $("#sss").append('<div class="form-group"><label for="exampleFormControlInput33">Birthday</label><input type="date" class="form-control" id="exampleFormControlInput33" value="' + result.date + '"></div>');
                    $("#sss").append('<div class="form-group"><label for="exampleFormControlInput44">Address</label><input type="text" class="form-control" id="exampleFormControlInput44" value="' + result.address + '"></div>');
                });
            }
            else {
                alert(" Sorry there are no student with this ID ")
            }
        });

    }
}




function Get() {

    $.get("http://localhost/WebAPI/studenta/GetStudentInfo", null, function (data) {
        $('#studentTableBody').empty();
        for (i = 0; i < data.length; i++) {
            debugger
            var st = '<tr>';
            var item = data[i];
            st += '<th scope="row">' + item.id + '</th>';
            st += '<td>' + item.Name + '</td>';
            st += '<td>' + item.address + '</td>';
            st += '<td>' + item.grade + '</td>';
            st += '<td>' + item.birthday + '</td>';
            st += '</tr>';
            $('#studentTableBody').append(st);
        }
    });
}



function Add() {
    debugger
    var dodo = {
        Name: $("#exampleFormControlInput1").val(),
        address: $("#exampleFormControlInput4").val(),
        grade: $("#exampleFormControlInput2").val(),
        birthday: $("#exampleFormControlInput3").val()
    }
    $('#exampleModal').modal('hide');

    $.ajax({
        url: "http://localhost/WebAPI/studenta/addNewStudent",
        type: "POST",
        data: JSON.stringify(dodo),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            alert(data);
            Get();
        }
    });


}




function Update() {
    debugger
    $('#exampleModal1').modal('hide');
    var lolo = {
        Name: $("#exampleFormControlInput11").val(),
        address: $("#exampleFormControlInput44").val(),
        grade: $("#exampleFormControlInput22").val(),
        birthday: $("#exampleFormControlInput33").val()
    }

    $.ajax({
        url: "http://localhost/WebAPI/studenta/UpdateStudent/" + id,
        type: "POST",
        data: JSON.stringify(lolo),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {

            alert(data);
            Get();
        }
    });



    /*
    $.get("http://localhost/WebAPI/studenta/UpdateStudent/" + id, null, JSON.stringify(lolo), {
        $('#exampleModal1').modal('hide');
        alert(result);
        Get();
    });*/

}


function Delete() {
    debugger
    id = prompt("Enter the Student ID");
    if (id != null) {
        $.get("http://localhost/WebAPI/studenta/CheckStudentId/" + id, null, function (data) {

            if (data == "seccess") {

                $.get("http://localhost/WebAPI/studenta/DeleteStudent/" + id, null, function (result) {

                    alert(result);
                    Get();
                });
            }
            else {
                alert(" Sorry there are no student with this ID ")
            }
        });

    }

}







/*

  $(document).ready(function () {
    $("button").click(function () {
        $("#exampleModal").remove();
    });
});



 var toto = prompt("Enter the password");
    if (toto === "123456") {
        alert("the password is correct ");
    }
    else {
        alert("the password is not correct try again");

    }
}
*/