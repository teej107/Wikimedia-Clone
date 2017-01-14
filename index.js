/**
 * Created by tanner on 1/14/17.
 */
window.onload = linkImages;

function linkImages()
{
    var imgs = document.getElementsByTagName('img');
    for (var i = 1; i < imgs.length; i++)
    {
        imgs[i].outerHTML = "<a href=\"" + imgs[i].alt + "\">" + imgs[i].outerHTML + "</a>";
    }
}