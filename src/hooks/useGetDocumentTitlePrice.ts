import { useEffect } from 'react'
import useGetMoonBusdLpPrice from 'utils/useGetMoonBusdLpPrice'

const useGetDocumentTitlePrice = () => {
  const moonPriceBusd = useGetMoonBusdLpPrice()

    const moonPriceBusdString =
        Number.isNaN(moonPriceBusd) || moonPriceBusd === 0 || !moonPriceBusd
            ? ''
            : ` - $${moonPriceBusd.toLocaleString(undefined, {
                minimumFractionDigits: 3,
                maximumFractionDigits: 12,
            })}`

    useEffect(() => {
        document.title = `MoonToken Swap${moonPriceBusdString}`
    }, [moonPriceBusdString])
}
export default useGetDocumentTitlePrice
