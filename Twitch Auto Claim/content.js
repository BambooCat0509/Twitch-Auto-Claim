function claimLoyaltyPoints() {
	const rewardContainer = document.querySelector('div.ScTransitionBase-sc-hx4quq-0.OBUFH.tw-transition');
	if (rewardContainer && rewardContainer.getAttribute('aria-hidden') === 'false') {
		const claimButton = document.querySelector('button[aria-label="領取額外獎勵"].ScCoreButton-sc-ocjdkq-0.hpBkMI');
		if (claimButton) {
			var time = new Date();
			console.log(time.toLocaleString(), ": 成功領取忠誠點數");
			claimButton.click();
			chrome.runtime.sendMessage({ type: "log", text: "成功領取忠誠點數" });
		}
	}
}
setInterval(claimLoyaltyPoints, 5000);