var db = firebase.firestore();
                var collectionRef= db.collection("items");
                collectionRef.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        var name = doc.data().name;
                        var description = doc.data().description;
                        var amount = doc.data().amount;
                        var url = doc.data().imageURL;
                        document.getElementById("additems").innerHTML+= "<div class='col-lg-4 col-md-6 mb-4'><div class='card h-100'><a href='#'><img class='card-img-top' src='"+url+"' alt='"+name+"'></a><div class='card-body'><h4 class='card-title'><a href='#' style='color:  #184d47;'>"+name+"</a></h4><h5>₦"+amount+"</h5><p class='card-text'>"+description+"</p><form><script src='https://checkout.flutterwave.com/v3.js'></script><button onClick='makePayment()'>Pay Now</button></form></div><div class='card-footer'><small class='text-muted'>&#9733; &#9733; &#9733; &#9733; &#9734;</small></div></div></div>";
                        //console.log(doc.id, " => ", doc.data());  
                    });
                });