window.onload = () => {
    let input = document.querySelector('#knopka');
    input.oninput = function() {
        let value = this.value.trim();
        let list = document.querySelectorAll('.least li');

        if(value != '') {
            list.forEach(elem => {
                if(elem.innerText.search(value) == -1) {
                    elem.classList.add('')
                }
             });
        }
        console.log(this.value);
    };
};  