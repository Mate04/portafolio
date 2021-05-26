

    const btn_menu = document.querySelector('.menu_ul_li_btn')
    
        btn_menu.addEventListener(`click`, ()=> {
            
            const menu_items_li = document.querySelector('.menu_ul_li')
            menu_items.classList.toggle('show')
            
        })
        const menu_items = document.querySelector('.menu_ul')
        menu_items_li.addEventListener(`click`, ()=>{
            menu_items_li.classList.toggle('show')
        })