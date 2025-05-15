        const characters = [
            "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
            "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
            "o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7",
            "8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
            "}]",",","|",":",";","<",">",".","?","/"
        ];

        function generate_a_char() {
            let random_nr = Math.floor(Math.random() * characters.length);
            return characters[random_nr];
        }

        function generate_password(length_of_password) {
            let password = "";
            for (let i = 0; i < length_of_password; i++) {
                password += generate_a_char();
            }
            document.getElementById("pwd").textContent = password;
        }
