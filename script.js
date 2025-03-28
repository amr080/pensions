document.addEventListener('DOMContentLoaded', () => {
    const calc = (payment = 20) => {
      // Core math parameters
      const INIT_ASSETS = 100
      const INIT_LIAB = 150
      const LOSS = 0.10
      const YIELD_RATE = 0.05
      const BORROW_COST = 0.03
  
      // Sale scenario
      const saleAssets = INIT_ASSETS - (payment * (1 - LOSS))
      const saleLiab = INIT_LIAB - payment
      const saleRatio = (saleAssets / saleLiab * 100).toFixed(2)
  
      // Stablecoin scenario
      const stableAssets = INIT_ASSETS
      const stableLiab = INIT_LIAB - payment
      const stableRatio = (stableAssets / stableLiab * 100).toFixed(2)
      const netYield = (payment * (YIELD_RATE - BORROW_COST)).toFixed(2)
  
      // Update DOM
      document.getElementById('saleAssets').textContent = saleAssets.toFixed(2)
      document.getElementById('saleLiab').textContent = saleLiab.toFixed(2)
      document.getElementById('saleRatio').textContent = saleRatio
      
      document.getElementById('stableAssets').textContent = stableAssets.toFixed(2)
      document.getElementById('stableLiab').textContent = stableLiab.toFixed(2)
      document.getElementById('stableRatio').textContent = stableRatio
      document.getElementById('yield').textContent = netYield
    }
  
    document.getElementById('payout').addEventListener('input', (e) => {
      calc(parseFloat(e.target.value))
    })
  
    calc() // Initial calc
  })
  