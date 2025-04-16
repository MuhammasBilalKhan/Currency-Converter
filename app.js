

async function CurrencyConverter() {
    
        const response =  await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json")
        const data = await response.json()
        console.log(data)

}

CurrencyConverter();