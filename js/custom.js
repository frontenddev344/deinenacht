
class readMore {
    constructor() {
        this.content = '.readmore__content';
        this.buttonToggle = '.readmore__toggle';
    }

    bootstrap() {
        this.setNodes();
        this.init();
        this.addEventListeners();
    }

    setNodes() {
        this.nodes = {
            contentToggle: document.querySelector(this.content)
        };

        this.buttonToggle = this.nodes.contentToggle.parentElement.querySelector(this.buttonToggle);
    }

    init() {
        const { contentToggle } = this.nodes;

        this.stateContent = contentToggle.innerHTML;

        contentToggle.innerHTML = `${this.stateContent.substring(0, 400)}...`;
    }

    addEventListeners() {
        this.buttonToggle.addEventListener('click', this.onClick.bind(this))
    }

    onClick(event) {
        const targetEvent = event.currentTarget;
        const { contentToggle } = this.nodes

        if (targetEvent.getAttribute('aria-checked') === 'true') {
            targetEvent.setAttribute('aria-checked', 'false')
            contentToggle.innerHTML = this.stateContent;
            this.buttonToggle.innerHTML = 'Lese weniger'

        } else {
            targetEvent.setAttribute('aria-checked', 'true')
            contentToggle.innerHTML = `${this.stateContent.substring(0, 500)}...`
            this.buttonToggle.innerHTML = 'Mehr lesen'
        }
    }
}


const initReadMore = new readMore();
initReadMore.bootstrap()



//3 Drop-LinksAfter//

// document.addEventListener('DOMContentLoaded', function() {
//     var button = document.getElementById('showButton');
//     var content = document.getElementById('content');

//     button.addEventListener('click', function() {
//         if (content.style.display === 'none' || content.style.display === '') {
//             content.style.display = 'block';
//             button.textContent = 'Lese weniger';
//         } else {
//             content.style.display = 'none';
//             button.textContent = 'Mehr lesen';
//         }
//     });
// });



document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.showButton');
    var contents = document.querySelectorAll('.content');

    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var content = contents[index];
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Lese weniger';
            } else {
                content.style.display = 'none';
                button.textContent = 'Mehr lesen';
            }
        });
    });
});

//3 Drop-LinksAfter//