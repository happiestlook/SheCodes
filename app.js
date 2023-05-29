       function moreInfo() {
        let name = prompt('What is your name?');
        let problem = prompt('Is your wardrobe is stressful for you? Rate from 1 to 10').trim();

        if (problem > 5) {
          alert("Don't worry " + name + ", I can help you!!! Waiting for you in my Instagram @happiest_looks")
          
        } else {
          alert("Look " + name + ", we can make it much better! Waiting for you in my Instagram @happiest_looks")
        }
      }

      let infoButton = document.querySelector('button');
      infoButton.addEventListener('click', moreInfo);
