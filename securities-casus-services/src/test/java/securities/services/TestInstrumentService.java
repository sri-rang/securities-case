package securities.services;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import securities.model.InstrumentPrice;
import securities.services.InstrumentListener;
import securities.services.InstrumentService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/autoload.xml"})
public class TestInstrumentService {

	private static final Logger logger = Logger.getLogger(TestInstrumentService.class);
	@Autowired
	private InstrumentService instrumentService;
	
	@Test
	public void testInstrumentService() {
		InstrumentListener listener = new InstrumentListener() {
			@Override
			public void priceUpdated(InstrumentPrice updatedPrice) {
				logger.info("Price update: "+updatedPrice.getInstrument().getCode()+" -> " + updatedPrice.getPrice());
			}
		};
		
		instrumentService.registerListener(listener);
		try {Thread.sleep(10000);} catch (InterruptedException e) {}
		instrumentService.unregisterListener(listener);
		
		
	}
}
