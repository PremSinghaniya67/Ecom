const allLikeButton = document.querySelectorAll('.like-btn');
//allLikeButton--> will be an array

async function likeButton(productId , btn){ //data mil raha h isliye api bana diye
    try{ //response get data
        let response = await axios({ //copy paste from axios doc -> To send post request like we did using form tag.
            method: 'post',
            url: `/product/${productId}/like`,
            headers: {'X-Requested-With': 'XMLHttpRequest'}, //AJAX request : XMLHttpRequest
        });
        
        //like - unlike operation views
        if(btn.children[0].classList.contains('fas')){
            btn.children[0].classList.remove('fas')
            btn.children[0].classList.add('far')
        } else{
            btn.children[0].classList.remove('far')
            btn.children[0].classList.add('fas')
        }
        // console.log(response);
    }
    catch (e) {
        // console.log(e);
        window.location.replace('/login'); //Here we don't have req,res object as it is not middleware , so we don't have res.render() thus have to use window .location.replace to redirect.This is equivalent to redirect
        // console.log(e.message)
    }
}


for(let btn of allLikeButton){
    btn.addEventListener('click' , ()=>{
        let productId = btn.getAttribute('product-id'); //we use user-defined attribute -> product-id
        likeButton(productId,btn);
    })
}