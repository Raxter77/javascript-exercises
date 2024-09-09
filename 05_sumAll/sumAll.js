const sumAll = function(rangeExtentA, rangeExtentB)
{
    if (typeof(rangeExtentA) != "number" || typeof(rangeExtentB) != "number")   
    {
        return "ERROR";
    }
    else if (!(Number.isInteger(rangeExtentA) && Number.isInteger(rangeExtentB)))
    {
        return "ERROR";
    }
    else if (rangeExtentA < 0 || rangeExtentB < 0)
    {
        return "ERROR";
    }
    else
    {
        let start;
        let end;
        if (rangeExtentA < rangeExtentB)
        {
            start = rangeExtentA;
            end = rangeExtentB;
        }
        else
        {
            start = rangeExtentB;
            end = rangeExtentA;
        }

        let total = 0;

        for (let i = start; i <= end; i++)
        {
            total += i;
        }

        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
