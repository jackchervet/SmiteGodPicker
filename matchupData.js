var keys = {
	 "Ganesha 3": 0,
	 "Geb 1": 1,
	 "Geb 1 (CC immune)": 2,
	 "Khepri 1": 3, 
	 "Kumbakharna 1": 4,
	 "Kumbakharna 4": 5,
	 "Kuzenbo 3": 6,
	 "Sobek 1": 7,
	 "Sobek 2": 8,
	 "Amaterasu 3": 9,
	 "Cu Chulainn 3 (rage)": 10,
	 "Erlang 3 (turtle)": 11,
	 "Hercules 1": 12,
	 "Sun Wukong 3 (tiger)": 13,
	 "Sun Wukong 3 (bull)": 14,
	 "Tyr 1 (damage stance)": 15,
	 "Vamana 1": 16,
	 "Mercury 3": 17,
	 "Ne Zha 4": 18,
	 "Apollo 3": 19,
	 "Chiron 3": 20
};

var results = Object.freeze({
	"two": "Straight Win", 
	"one": "Deals CC/DMG but takes DMG", 
	"zero": "Tie - No CC, both deal DMG", 
	"samegod": "Same God - no data",
	"random": "One will Straight Win, but unpredictable which",
	"none": "Get CC'd and take DMG but deal DMG",
	"ntwo": "Straight Loss"
});

var moves = 
[[results.samegod, results.one, results.ntwo, results.random, results.one, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo],
 [results.none, results.samegod, results.samegod, results.none, results.one, results.ntwo, results.none, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.none, results.ntwo, results.none, results.ntwo, results.ntwo],
 [results.two, results.samegod, results.samegod, results.two, results.one, results.zero, results.two, results.zero, results.one, results.one, results.zero, results.one, results.zero, results.one, results.zero, results.zero, results.one, results.zero, results.zero, results.one, results.one],
 [results.random, results.one, results.ntwo, results.samegod, results.one, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo],
 [results.none, results.none, results.none, results.none, results.samegod, results.samegod, results.none, results.ntwo, results.ntwo, results.ntwo, results.none, results.ntwo, results.none, results.ntwo, results.ntwo, results.ntwo, results.none, results.ntwo, results.none, results.ntwo, results.none],
 [results.two, results.two, results.zero, results.two, results.samegod, results.samegod, results.two, results.none, results.one, results.two, results.two, results.one, results.one, results.one, results.two, results.two, results.two, results.two, results.zero, results.one, results.two],
 [results.two, results.one, results.ntwo, results.two, results.one, results.ntwo, results.samegod, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo],
 [results.two, results.two, results.zero, results.two, results.two, results.one, results.two, results.samegod, results.samegod, results.ntwo, results.two, results.two, results.two, results.two, results.two, results.two, results.two, results.two, results.one, results.two, results.two],
 [results.two, results.two, results.none, results.two, results.two, results.none, results.two, results.samegod, results.samegod, results.ntwo, results.none, results.two, results.none, results.two, results.none, results.none, results.two, results.none, results.none, results.two, results.two],
 [results.two, results.two, results.none, results.two, results.two, results.ntwo, results.two, results.two, results.two, results.samegod, results.two, results.two, results.two, results.two, results.two, results.two, results.two, results.two, results.none, results.two, results.two],
 [results.two, results.two, results.zero, results.two, results.one, results.ntwo, results.two, results.ntwo, results.one, results.ntwo, results.samegod, results.one, results.ntwo, results.ntwo, results.one, results.two, results.two, results.two, results.none, results.one, results.two],
 [results.two, results.two, results.none, results.two, results.two, results.none, results.two, results.ntwo, results.ntwo, results.ntwo, results.none, results.samegod, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.two, results.ntwo, results.none, results.two, results.two],
 [results.two, results.two, results.zero, results.two, results.one, results.none, results.two, results.ntwo, results.one, results.ntwo, results.two, results.two, results.samegod, results.ntwo, results.one, results.two, results.two, results.ntwo, results.none, results.one, results.two],
 [results.two, results.two, results.none, results.two, results.two, results.none, results.two, results.ntwo, results.ntwo, results.ntwo, results.two, results.two, results.two, results.samegod, results.samegod, results.ntwo, results.two, results.ntwo, results.none, results.two, results.two],
 [results.two, results.two, results.zero, results.two, results.two, results.ntwo, results.two, results.ntwo, results.one, results.ntwo, results.none, results.two, results.none, results.samegod, results.samegod, results.zero, results.two, results.ntwo, results.none, results.one, results.two],
 [results.two, results.two, results.zero, results.two, results.two, results.ntwo, results.two, results.ntwo, results.one, results.ntwo, results.ntwo, results.two, results.ntwo, results.two, results.zero, results.samegod, results.two, results.ntwo, results.ntwo, results.two, results.two],
 [results.two, results.one, results.none, results.two, results.one, results.ntwo, results.two, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.samegod, results.ntwo, results.none, results.ntwo, results.two],
 [results.two, results.two, results.zero, results.two, results.two, results.ntwo, results.two, results.ntwo, results.one, results.ntwo, results.ntwo, results.two, results.two, results.two, results.two, results.two, results.two, results.samegod, results.ntwo, results.two, results.two],
 [results.two, results.one, results.zero, results.two, results.one, results.zero, results.two, results.none, results.one, results.one, results.one, results.one, results.one, results.one, results.one, results.two, results.one, results.two, results.samegod, results.one, results.one],
 [results.two, results.two, results.none, results.two, results.two, results.none, results.two, results.ntwo, results.ntwo, results.ntwo, results.none, results.ntwo, results.none, results.ntwo, results.none, results.ntwo, results.two, results.none, results.none, results.samegod, results.two],
 [results.two, results.two, results.none, results.two, results.one, results.ntwo, results.two, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.ntwo, results.none, results.ntwo, results.samegod]];