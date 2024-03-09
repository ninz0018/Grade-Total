$(document).on('submit','#grades',function(e){
    e.preventDefault();
    let s = $("#subj").val();
    let g = $("#gra").val();
    let s2 = $("#none").val();
    let k = "";

  
    
    if (s == s2 || g == k) {
        Swal.fire({
            icon: "error",
            title: "Select Subject or Enter Grade!",
            text: "Try again!",
            footer: '<a target="_blank" href="https://www.google.com">Why do I have this issue? </a>'
          });
    }else {

    
        if(g>100) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Grade!",
            footer: '<a href="https://www.google.com">Why do I have this issue?</a>'
          });
        }else if(g>=75 ) {
            $("#rate").append(`<div>Passed</div>`);
            $("#subj option:selected").addClass("d-none");
            $("#subj").val(1);           
        }else if(g<=74 && g>=65){
            $("#rate").append(`<div>Failed</div>`);
            $("#subj option:selected").addClass("d-none");
            $("#subj").val(1);

        }else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid Grade!",
                footer: '<a href="https://www.google.com">Why do I have this issue?</a>'
              });
        }


        if (g > 64 && g < 101) {

            $("#sub1").append(`<div>${s}</div>`);
            
            gra = parseInt(g);
            
            $('#grad').append(`<div class="ent">`+ gra +`</div>`);
          
            calculateAverage();
        }
        rate();
      }
        

    
})

function rate() {
  let x = $("#aver").text();

  if (x >=98 && x <= 100 ){
    $("#pass").html(`<div>With Highest Honor</div>`)
  }else if(x >=95) {
    $("#pass").html(`<div>With High Honor</div>`)
  }else if(x >= 90){
    $("#pass").html(`<div>With Honor</div>`)
  }else if (x >=75){
    $("#pass").html(`<div>Passed</div>`)
  }else {
    $("#pass").html(`<div>Failed</div>`)
  }
}

$(document).on('click','#addsub',function(){
  addSubs();
})



function addSubs() {
  let g = $("#names").val();
  $("#subj").append(`<option>`+ g + `</option>`)
}

function calculateAverage() {
    let total = 0;
    let count = 0;
    $('.ent').each(function() {
      total = total + parseInt($(this).text());
      count++;
    });
    let average = total / count;
    $('#aver').text(average.toFixed(1));
}

$(document).on('click','#clgrad',function(){
    $("$gra").val("");
})

$(document).on('click','#clr',function(){
    Swal.fire({
        title: "Restore all Subject?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Restore it!"
      }).then((result) => {
        if (result.isConfirmed) {
            subjectOption();
            $("#gra").val("");

          Swal.fire({
            title: "Subject Restored!",
            text: "Your file has been Restored.",
            icon: "success"
          });
        }
      });
    
})
$(document).on('click','#clrn',function(g) {
    g.preventDefault();
    $("#names").val("");
})
$(document).on('click','#clres',function(a) {
    a.preventDefault();
    Swal.fire({
        title: "Clear all results?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Clear it!"
      }).then((result) => {
        if (result.isConfirmed) {
            $("#sub1").html("");
            $("#grad").html("");
            $("#rate").html("");
            $("#aver").html("");
            $("#pass").html("");
          Swal.fire({
            title: "Cleared!",
            text: "Your file has been cleared.",
            icon: "success"
          });
        }
      });
    
})



$( document ).ready(function() {
    subjectOption();
});

function subjectOption(){
    $("#subj").html(`<option id="none" value="1" selected>Select Subject</option>
    <option value="English">English</option>
    <option value="Math">Math</option>
    <option value="Science">Science</option>
    <option value="AP">AP</option>
    <option value="Filipino">Filipino</option>
    <option value="P.E">P.E</option>
    <option value="Art">Art</option>
    <option value="E.S.P">E.S.P</option>
    <option value="Mapeh">Music</option>
    <option value="IT">IT</option>
    <option value="Health">Health</option>
    <option value="T.L.E">T.L.E</option>`)
}
