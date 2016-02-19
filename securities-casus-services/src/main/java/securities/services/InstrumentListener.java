package securities.services;

import securities.model.InstrumentPrice;

public interface InstrumentListener {

	void priceUpdated(InstrumentPrice updatedPrice);
}
