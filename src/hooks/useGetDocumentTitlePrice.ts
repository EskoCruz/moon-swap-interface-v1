import { useEffect } from 'react'
import useGetCakeBusdLpPrice from 'utils/useGetCakeBusdLpPrice'
// import useGetPriceData from './useGetPriceData'
// import { MOONTOKEN } from '../constants'

const useGetDocumentTitlePrice = () => {
  const cakePriceBusd = useGetCakeBusdLpPrice()
  // const priceData = useGetPriceData()

  // const moonPriceUsd = priceData ? parseFloat(priceData.data[MOONTOKEN.address].price) : 0

  // const moonPriceUsdString =
  //   Number.isNaN(moonPriceUsd) || moonPriceUsd === 0
  //     ? ''
  //     : ` - $${moonPriceUsd.toLocaleString(undefined, {
  //         minimumFractionDigits: 3,
  //         maximumFractionDigits: 3,
  //       })}`
    const cakePriceBusdString =
        Number.isNaN(cakePriceBusd) || cakePriceBusd === 0 || !cakePriceBusd
            ? ''
            : ` - $${cakePriceBusd.toLocaleString(undefined, {
                minimumFractionDigits: 3,
                maximumFractionDigits: 3,
            })}`

  // useEffect(() => {
  //   document.title = `MoonSwap${moonPriceUsdString}`
  // }, [moonPriceUsdString])
    useEffect(() => {
        document.title = `PancakeSwap${cakePriceBusdString}`
    }, [cakePriceBusdString])
}
export default useGetDocumentTitlePrice
