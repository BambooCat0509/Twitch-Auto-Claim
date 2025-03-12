function claimLoyaltyPoints() {
	const rewardContainer = document.querySelector('div.ScTransitionBase-sc-hx4quq-0.OBUFH.tw-transition');
	if (rewardContainer && rewardContainer.getAttribute('aria-hidden') === 'false') {
		const claimButton = document.querySelector('button[aria-label="領取額外獎勵"].ScCoreButton-sc-ocjdkq-0.hpBkMI');
		
		if (claimButton) {
			console.log("${currentTime} 正在領取忠誠點數...");
			claimButton.click();
			chrome.runtime.sendMessage({ type: "log", text: "已領取忠誠點數" });
		}
	}
}
setInterval(claimLoyaltyPoints, 20000);