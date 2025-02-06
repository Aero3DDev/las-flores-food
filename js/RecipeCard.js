
export class RecipeCard
{
    constructor(type, id, str, thumb)
    {
        this.type         = type;
        this.id           = id;
        this.str          = str;
        this.thumb        = thumb;
        this.thumbPreview = thumb;
    }

    toInnerHTML()
    {
        let href = '';
        if(this.type === "Meal"){
            href = `meal-info.html?id=${this.id}`;
            this.thumbPreview += '/preview';
        }
        else if(this.type === "Drink"){
            href = `drink-info.html?id=${this.id}`;
            this.thumbPreview += '/preview';
        }
        else if(this.type === "Model"){
            href = `model-info.html?id=${this.id}`;
        }

        const innerHTML = (`
            <p class="cross-pattern"></p>
            <p class="box-left-orange"></p>
            <p class="box-right-orange"></p>
            <p class="box-text">
                <span>${this.str}</span> 
            </p>

            <button class="box-button" onclick="window.location.href='${href}'">Show Recipe</button>

            <picture class="box-pic">
                <source srcset=${this.thumb} media="(min-width: 601px)" />
                <source srcset=${this.thumbPreview} media="(max-width: 600px)" />
                <img src=${this.thumb} alt=${this.str} />
            </picture>
        `);

        return innerHTML;
    }
}