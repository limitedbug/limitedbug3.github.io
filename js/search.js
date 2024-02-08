    document.addEventListener("DOMContentLoaded", function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("navbar-placeholder").innerHTML = this.responseText;
                
                // Asociar el evento de búsqueda después de cargar el navbar
                var searchInput = document.getElementById('search-input');
                searchInput.addEventListener('input', function() {
                    var searchText = this.value.toLowerCase();
                    var paragraphs = document.querySelectorAll('#content p');
                    
                    paragraphs.forEach(function(paragraph) {
                        var paragraphText = paragraph.textContent.toLowerCase();
                        if (paragraphText.includes(searchText)) {
                            paragraph.innerHTML = paragraphText.replace(new RegExp(searchText, 'gi'), function(match) {
                                return '<span class="highlight">' + match + '</span>';
                            });
                        } else {
                            paragraph.innerHTML = paragraphText;
                        }
                    });
                });
            }
        };
        xhr.open("GET", "navbar.html", true);
        xhr.send();
    });

    
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });
  
  