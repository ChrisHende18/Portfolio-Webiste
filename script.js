/*===== Project Filter Section =====*/
const filterContainer = document.querySelector(".project-filter-inner"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    projectItems = document.querySelectorAll(".project-item"),
    totalProjectItems = projectItems.length;
    

    for(let i=0; i<totalFilterBtn; i++)
    {
        filterBtns[i].addEventListener("click", function()
        {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter")
            for(let k=0; k < totalProjectItems; k++)
            {
                if(filterValue === projectItems[k].getAttribute("data-category"))
                {
                    projectItems[k].classList.remove("hide");
                    projectItems[k].classList.add("show");
                }
                else 
                {
                    projectItems[k].classList.add("hide");
                    projectItems[k].classList.remove("show");
                }
                if(filterValue === "all")
                {
                    projectItems[k].classList.remove("hide");
                    projectItems[k].classList.add("show");
                }
            }
        })
    }