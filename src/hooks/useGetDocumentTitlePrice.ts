import { useEffect } from 'react'
import useGetPriceData from './useGetPriceData'
import { MOONTOKEN } from '../constants'

const useGetDocumentTitlePrice = () => {
  const priceData = useGetPriceData()

  const moonPriceUsd = priceData ? parseFloat(priceData.data[MOONTOKEN.address].price) : 0

  const moonPriceUsdString =
    Number.isNaN(moonPriceUsd) || moonPriceUsd === 0
      ? ''
      : ` - $${moonPriceUsd.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`

  useEffect(() => {
    document.title = `MoonSwap${moonPriceUsdString}`
  }, [moonPriceUsdString])
}
export default useGetDocumentTitlePrice
