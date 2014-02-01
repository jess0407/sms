$(document).ready(function () {

    $("#res1098").hide();
	$("#res2").hide();
	
	$("#info").on('click', function(event){
		event.preventDefault();
		
		$.get('ajax/info.html',function(result){			
			$('section').html(result);
		});
		
		
		
	});

    $('#enc').click(function () {
        //validate keys if message is empty, tell user
        var message = encrpyt();

         updateEncView(message);
        //end of click function
    });

    $('#888').click(function () {

        var codesarr  = decipher();   
        updateDecView(codesarr);

    });


    // JAVA SCRIPT ENCRPTION LOGIC

    function encrpyt() {
        var msg = $('#msg').val();
        var key = $('#key').val().toUpperCase();
        var keynum = new Array(key.length);
        var nMsgnum = new Array(msg.length);
        var lcount = 0;
        //transform the key into numerical adbance ('A'or'a' equals 1,'Z' or 'z')
        for (var j = 0; j < key.length; j++) {
            //for capital letter
            if (key.charCodeAt(j) >= 65 && key.charCodeAt(j) <= 90) {
                keynum[j] = key.charCodeAt(j) - 65;
            } else if (key.charCodeAt(j) >= 97 && key.charCodeAt(j) <= 122) {
                keynum[j] = key.charCodeAt(j) - 97;

            }

            // end of for loop	
        }

        // encription
        for (var i = 0; i < msg.length; i++) {
            // if the letter in loop is Capital
            if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {

                if (msg.charCodeAt(i) + keynum[lcount % key.length] <= 90) {
                    nMsgnum[i] = msg.charCodeAt(i) + keynum[lcount % key.length];

                } else {
                    nMsgnum[i] = msg.charCodeAt(i) + keynum[lcount % key.length] - 26;

                }

                lcount++;
            } // if the letter in loop is lowercase
            else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {

                if (msg.charCodeAt(i) + keynum[lcount % key.length] <= 122) {

                    nMsgnum[i] = msg.charCodeAt(i) + keynum[lcount % key.length];

                } else {
                    nMsgnum[i] = msg.charCodeAt(i) + keynum[lcount % key.length] - 26;
                }

                lcount++;
            } else {
                nMsgnum[i] = msg.charCodeAt(i);

            }
            //end of for loop  
        }

        return nMsgnum;
    }

    function decipher(){
	    console.log('diciphering');
	    var msg = $('#demsg').val();
        var key = $('#dekey').val().toUpperCase();
        var keynum = new Array(key.length);
        var codes = new Array(msg.length);
        var lcount = 0;
        //transform the key into numerical adbance ('A'or'a' equals 1,'Z' or 'z')
        for (var j = 0; j < key.length; j++) {
            //for capital letter
            if (key.charCodeAt(j) >= 65 && key.charCodeAt(j) <= 90) {
                keynum[j] = key.charCodeAt(j) - 65;
            } else if (key.charCodeAt(j) >= 97 && key.charCodeAt(j) <= 122) {
                keynum[j] = key.charCodeAt(j) - 97;
            }
            // end of for loop	
        }

        // decipher
        for (var i = 0; i < msg.length; i++) {
            // if the letter in loop is Capital
            if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {

                if (msg.charCodeAt(i) - keynum[lcount % key.length] >= 65) {
                    codes[i] = msg.charCodeAt(i) - keynum[lcount % key.length];

                } else {
                    codes[i] = msg.charCodeAt(i) - keynum[lcount % key.length] + 26;

                }

                lcount++;
            } // if the letter in loop is lowercase
            else if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {

                if (msg.charCodeAt(i) - keynum[lcount % key.length] >=97) {

                    codes[i] = msg.charCodeAt(i) - keynum[lcount % key.length];

                } else {
                   codes[i] = msg.charCodeAt(i) - keynum[lcount % key.length] + 26;
                }

                lcount++;
            } else {
               codes[i] = msg.charCodeAt(i);
            }
            //end of for loop  
        }
	    
	    return codes;
    }//end decipher

    function updateEncView(numberarray) {

        $("#res1098").show();
        $("#resultd").hide();
        if ($("#resultd") == null) {

            for (var k = 0; k < numberarray.length; k++) {
               $("#resultd").append(String.fromCharCode(numberarray[k]));
            }
        } else {
           $("#resultd").html("");
            for (var k = 0; k < numberarray.length; k++) {
                $("#resultd").append(String.fromCharCode(numberarray[k]));
            }
        }
       $("#resultd").fadeTo(2000, 1);
    }
    function updateDecView(numberarray) {
		console.log('reder..');
        $("#res2").show();
        $("#dedmsg").hide();
        if ($("#dedmsg") == null) {

            for (var k = 0; k < numberarray.length; k++) {
               $("#dedmsg").append(String.fromCharCode(numberarray[k]));
            }
        } else {
           $("#dedmsg").html("");
            for (var k = 0; k < numberarray.length; k++) {
               $("#dedmsg").append(String.fromCharCode(numberarray[k]));
            }
        }
        $("#dedmsg").fadeTo(2000, 1);
    }


    //end of documen raedy	
});