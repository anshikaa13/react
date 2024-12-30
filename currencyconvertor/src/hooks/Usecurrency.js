import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-12/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;
//custom hook
//jo bhi url mein diya hai uski vlaue le lungi api call fir usme jo run hoga converted to json fron string fir use kahin store karana si but agr ese hi store kradita to ui mein change nhi hoga so usestate