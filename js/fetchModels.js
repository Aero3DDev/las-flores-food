
function getModels()
{
    return fetch('models.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.json()
        });
}

export {getModels};