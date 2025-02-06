// Note that function includes() does not work in Internet Explorer or some other old browsers 
// with no or incomplete ES6 support. To make it work in old browsers you must implement includes:
if (!String.prototype.includes)
{
    String.prototype.includes = function(search, start)
    {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        } else {
            return this.indexOf(search, start) !== -1;
        }
    };
}

function isEmpty(value)
{
   return ( // Null or undefined.
            (value == null) ||
            // Check if a Set() or Map() is empty
            (value.size === 0) ||
            // NaN - The only JavaScript value that is unequal to itself.
            (value !== value) ||
            // Length is zero && it's not a function.
            (value.length === 0 && typeof value !== "function") ||
            // Is an Object && has no keys.
            (value.constructor === Object && Object.keys(value).length === 0)
          )
}

export {isEmpty};