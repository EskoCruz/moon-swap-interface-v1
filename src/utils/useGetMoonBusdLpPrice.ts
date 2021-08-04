import { useCurrency } from 'hooks/Tokens'
import { useTradeExactIn } from 'hooks/Trades'
import { tryParseAmount } from 'state/swap/hooks'

const useGetMoonBusdLpPrice = () => {
    const moonAddress = '0x81E4d494b85A24a58a6BA45c9B418b32a4E039de'
    const busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
    const inputCurrency = useCurrency(moonAddress)
    const outputCurrency = useCurrency(busdAddress)
    const parsedAmount = tryParseAmount('1', inputCurrency ?? undefined)
    const bestTradeExactIn = useTradeExactIn(parsedAmount, outputCurrency ?? undefined)
    const price = bestTradeExactIn?.executionPrice.toSignificant(6)
    return price ? parseFloat(price) : undefined
}

export default useGetMoonBusdLpPrice
