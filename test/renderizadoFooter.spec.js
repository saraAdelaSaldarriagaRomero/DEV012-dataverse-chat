
import { renderFooter } from "../src/components/footer.js";


  describe(" Validando Footer", function () {
  
    it("Renderizando Footer", function () {
  
      const vistaFooter = renderFooter();
      const contenedorFooter = vistaFooter.querySelector("#footer");
      expect(contenedorFooter).toBeDefined();
  
    })
  
  })