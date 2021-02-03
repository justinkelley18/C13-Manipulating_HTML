
window.addEventListener('DOMContentLoaded', function () {
    let textBtn = document.querySelector('#HtmlButton');
    let textArea = document.getElementById('HtmlButtonText').Value;
    textBtn.addEventListener('click', (event) => {
        let userText = textArea;
        alert(userText);
        event.preventDefault()
    })
    const div1 = document.querySelector('#colors');
    div1.style.backgroundColor = '#3b4249';
    div1.style.width = '10rem';
    div1.style.height = '10rem';
    div1.style.borderRadius = '1rem';

    const myColors = ['#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa'];

    const paragraph = document.querySelector('#Pdiv');
    // 'click' event listener on PDiv
    paragraph.addEventListener('click', (event) => {
        const thisRandomColor = getRandomColor();
        event.target.style.color = thisRandomColor;
    })

    // Randomly selects an index from myColors, assigns value to myRandomColor
    const getRandomColor = () => {
        const myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
        return myRandomColor;
    }
    div1.addEventListener('mouseenter', (event) => {
        const thisRandomColor = getRandomColor();
        event.target.style.backgroundColor = thisRandomColor;

        div1.addEventListener('mouseleave', (event) => {
            event.target.style.backgroundColor = '#3b4249';
        })
    })
    let Btn = document.createElement('button')
        Btn.textContent = "Press me";
        Btn.className = ("BtnClass")
        document.body.appendChild(Btn)
        Btn.addEventListener('click', () => {
            alert("Hello, How are you?")
        })



    
});
