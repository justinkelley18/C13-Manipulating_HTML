$(document).ready(function () {
    let spanCount = 0;
    $('#friendButton').on('click', () => {
        spanCount + 1; 
        if(spanCount === 1) {
            $('span').show();
        } else if(spanCount > 1) {
            $('span').hide();
            spanCount = 0;
        }
    })

    const myFriends = [
        'Emma',
        'Matt',
        'Blake',
        'Mark',
        'Keith',
        'Aj',
        'Dav',
        'Solomon',
        'Troy',
        'Grace',
    ];

    let ulCount = 0; 

    for(let i = 0; i < myFriends.length; i += 1) {
        $('unorderL').append(`<li class="list-group-item">${myFriends[i]}</li>`);
        $('unorderL').hide(); 
    }


    $('#friendButton').on('click', () => {
        ulCount += 1; 
        if(ulCount === 1) {
            $('#friendUl').show();
        } else if(ulCount > 1) {
            $('#friendUl').hide();
            ulCount = 0;
        }
    })
    
    $('#emptyButton').on("click" , (event) => {
        $('#emptyDiv').append('<h3 class="h3">Justin Kelley</h3>');
        $("#h3").spanCount++
        $('#span1').hide(); 
    })

    const myColors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa'];
    $('.colorDiv').css({
        'background-color': '#3b4249',
        'width': '10rem',
        'height': '10rem',
        'border-radius': '1rem'
    });

    const getRandomColor = () => {
        const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
        return myRandomColor;
    }

    $('.colorDiv').mouseenter ((event) => {
        const randomCLR = getRandomColor();
        $(event.target).css('background-color', randomCLR);
    })
    $('.colorDiv').mouseleave ((event) => {
        $(event.target).css('background-color', '#3b4249');
    })

    $('#colorSwitch').click ((event) => {
        const randomCLR = getRandomColor();
        $(event.target).css('color', randomCLR);
    })
   
    $('.bodyClass').append('<button class="btn btn-lg btn-secondary col-6 py-2 mb-4" id="alertBtn">Click Me</button>');

    $('#alertBtn').on('click', (event) => {
        event.preventDefault()
        alert(`Hi How Are You?`);
    })
    $('#Btnsubmit').click(function (event)  {
        $("#Btnsubmit").append("#Message");
        alert(Message.value)
    })
    
 });