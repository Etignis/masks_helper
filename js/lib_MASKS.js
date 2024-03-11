(function(window){
  // You can enable the strict mode commenting the following line  
  // 'use strict';
		
	var data = [
		{
			title: "Ходы ведущего",
			key: "master_moves",
			color: "",
			ico: "",
			visible: false,

			sub: [			
				{
					title: "",
					key: "common",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Используйте ход монстра, угрозы или мест",
								"Открой неприятную истину.| Что им было бы неприятно сейчас узнать? Неприятная истина — это любой факт, в который игроки предпочли бы не верить. Комната полна ловушек. Услужливый гоблин — шпион. Позвольте игрокам осознать, в какую глубокую яму они угодили.",
								"Покажи признаки надвигающейся угрозы.| Что будет, если они не вмешаются в происходящее? Или какие следы или признаки опасности они могут сейчас обнаружить?",
								"Нанеси урон.| Что угрожает их здоровью?",
								"Расходуй их запасы.| Чего они могут лишиться сейчас? У них будет шанс вернуть это?",
								"Оберни их ход против них.| Какое преимущество дает персонажам сделанный ход? Его можно превратить в недостаток? Противник может получить такое же преимущество?",
								"Раздели их.| Они могут потерять контакт друг с другом?",
								"Предоставь возможность, подходящую классу.| Какая задача, связанная с текущей ситуацией, легко и эффектно решается *название класса+? Этот класс есть в партии?",
								"Укажи на недостатки.| Какие проблемы им могут принести их раса, класс, мировоззрение или снаряжение?",
								"Предоставь возможность.| Что полезного или ценного они сейчас могут получить? Какова будет цена?",
								"Назови условия и переспроси.| Какую цену им нужно заплатить, чтобы все-таки успешно совершить заявленный ход? Какие последствия их ждут?",
								"Поставь их в сложную ситуацию.| Из каких равнозначных вариантов им придется выбирать? Они будут одинаково плохи или одинаково хороши?",
								"Измени окружение. |Как может измениться окружение (местность, освещение, температура, погода и т.д.)?",
								"Покажи недостаток класса, расы, снаряжения. |Своя слабая сторона есть у всего. Орки могут особенно жаждать эльфийской крови. Магия священника может потревожить сон дремлющих тёмных сил. Факел, освещающий путь, может привлечь внимание таящихся во тьме глаз."
							]
						}
					},
				},		
				{
					title: "Ходы подземелья",
					key: "dungeon",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Измените окружение.| Окружение это общая атмосфера места, где находятся персонажи: ветвящиеся туннели, кривые деревья, безопасная тропа… Этим ходом вы можете представить новый антураж: туннели постепенно изгибаются, лес становится истлевшим и зловещим, тропинка кончается и персонажи вступают в чащу. Используйте этот ход, чтобы разнообразить местность на пути персонажей и населяющих её созданий.",
								"Укажите на надвигающуюся угрозу. | Если в подземелье в ожидании игроков томится нечто, с помощью этого хода можно показать его следы и признаки. Опишите следы дракона в грязи или слизистый след желатинового куба.",
								"Введите новую фракцию или вид существ. | Этот ход предполагает явное столкновение или вброс данных. Не мелочитесь: игроки должны понимать, что происходит. Правда, в лоб действовать тоже не надо: глава злобной секты не обязан размахивать плакатом и вопить на адских языках. Жесткое применение этого хода переходит в боевую сцену или атаку из засады.",
								"Используйте опасность фракции или вида существ.| Смотрите на фракции и виды широко. Орков сопровождают охотничьи варги. Безумному культу может служить нежить или монстры из глубин бездны. Вы часто будете делать этот ход не задумываясь, а просто красиво вводя в игру уже заготовленные идеи.",
								"Заставьте вернуться назад. | Взгляните на места, нанесённые на карту. Есть ли там что-то полезное, но не найденное игроками? Можете ли вы добавить новое препятствие, преодолимое, если вернуться назад? Не находится ли ключ от преградившей путь героев двери где-то в прошлых комнатах? что там ищменилось? Какие новые угрозы? О чем забыли?",
								"Предложите богатства за цену. | Чего желают игроки? Чем они готовы пожертвовать ради этого? Расположите желанный предмет вне досягаемости. Выберите нечто, ограничивающее персонажей: время, очки здоровья, снаряжение. Найдите способ дать им желаемое, но ценой потери чего-то еще.",
								"Бросьте вызов одному из персонажей. | Чтобы бросить вызов персонажу, посмотрите, в чём он хорош. Поставьте перед вором запертую дверь, покажите священнику служителей враждебного бога. Дайте волшебнику исследовать мистические тайны. Пускай воину встретится пара врагов с толстыми черепами. Предоставьте персонажам возможность блеснуть. Или наоборот, потавьте трудное препятствие." 
							]
						}
					},
				},
				{
					title: "В бою",
					key: "fight",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Используй ход монстра",
								"Открой преимущество монстра: у него есть особое свойство, усиливающий его предмет, необычная тактика, неуязвимость к чемулибо или союзники",
								"Противник выводит из строя твою броню или щит (на время или навсегда)",
								"Противник поджигает / отравляет / ввергает тебя или всех вас в сон / лишает подвижности / сбивает с ног / отправляет в нокаут",
								"Противник уничтожает нечто из твоей амуниции",
								"Противник сбегает (возможно, прихватив нечто из вашего имущества)",
								"Противник наносит прицельный удар, нанося урон конечности персонажа ",
								"Противник переводит твою атаку на твоего сюзника ",
								"Ты промахнулся (вариант — стрела отрекошетила) и поразил другую цель (важный предмет или персонажа",
								"Ты не заметил появление нового противника",
								"Ты слишком долго думал, куда нанести удар (прицеливался), за это время тебя обнаружили / настигли тебя / успели атаковать",
								"Твое оружие застряло в теле противника"							
							]
						}
					},
				},				
				{
					title: "Морфемы Проппа",
					key: "Propp_morphems",
					color: "",
					ico: "",
					data: {
						pre: "<a href='https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D1%84%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D1%81%D0%BA%D0%B0%D0%B7%D0%BA%D0%B8'>Морфемы Проппа</a> - составные части традиционной сказки или мифа.<br>Прямого отношения к правилам Dungeon World не имеет, но может оказаться полезным.",						
						list: {	
							meta: {								
								bShuffle: false,
							},
							data: [
								"Отлучка, пропажа кого-то или чего-то",	
								"Обращение к герою с запретом, предупреждение",		
								"Нарушение запрета",			
								"Разведка, выведывание со стороны антагониста",		
								"Получение антагонистом сведений о жертве",		
								"Подвох, обман со стороны антагониста",		
								"Пособничество со стороны обманутой жертвы",		
								"Вредительство со стороны антагониста",		
								"Беда, недостача, желание героя иметь что-либо",
								"Решение героя о противодействии",		
								"Отправка героя из дома",		
								"Оспытание героя со стороны дарителя волшебного средства или помощника",		
								"Реакция героя на действия дарителя",		
								"Получение героем волшебного средства",
								"Пространственное перемещение героя",		
								"Столкновение героя и антагониста",		
								"Клеймение героя",		
								"Победа героя над антагонистом",		
								"Ликвидация беды или недостачи",
								"Возвращение героя",		
								"Преследование героя, погоня",		
								"Спасение героя",		
								"Неузнанное прибытие героя домой",		
								"Необоснованные притязания ложного героя",
								"Трудная задача для героя",		
								"Решение задачи",		
								"Узнавание героя",		
								"Изобличение ложного героя или антагониста",		
								"Трансформация, получение героем нового облика",	
								"Наказание врага",		
								"Вступление в брак и воцарение героя"
							]
						}
					},
				},
				
			]
		},
		
		{
			title: "Ходы игроков",
			key: "player_moves",
			color: "",
			ico: "",
			group: {
				by: "type",
				rules: {
					0: "Общие ходы",
					1: "Ходы буклетов"
				}
			},

			sub: [
				{
					title: "Основные ходы",
					key: "basic_moves",
					color: "",
					ico: "",
					type: 0,
					sub: [
							{
								en: {
									title: "Directly engage a threat",
									key: "directly_engage_threat",
									data: {
										move: {
											data: {
												condition: "When you [directly engage a threat], roll +%DANGER%.",
												modifier: "If you’re {Afraid}, take -2.",
												parts: [
													{
														type: "hit",
														info: "On a hit, trade blows.",
														parts: [
															{
																type: "great",
																info: "On a 10+, pick two",
																		
															},
															{
																type: "partial",
																info: "On a 7-9, pick one",
																		
															}
														],
														list: [
															{
																title: "resist or avoid their blows"
															},
															{
																title: "take something from them"
															},
															{
																title: "create an opportunity for you allies"
															},
															{
																title: "impress, surprise, or frighten the opposition"
															},
														]		
													}
												]
												
											}
										}									
									}
								},
								ru: {
									title: "Выйти против явной угрозы",
									key: "directly_engage_threat",
									data: {
										move: {
											data: {
												condition: "Когда ты <b>выходишь против явной угрозы</b>, брось +%DANGER%.",
												modifier: "Если ты {Напуган} получи -2 к броску.",
												
												parts: [
													{
														type: "hit",
														info: "При успехе, обменяйся ударами.",
														parts: [
															{
																type: "great",
																info: "На 10+ выбери 2",
																		
															},
															{
																type: "partial",
																info: "На 7-9 выбери 1",
																		
															}
														],
														list: [
															{
																title: "сопротивляйся ударам или уклонись"
															},
															{
																title: "забери у противника что-то"
															},
															{
																title: "создай возможность для союзников"
															},
															{
																title: "впечатли, удиви или напугай противника"
															},
														]		
													}
												]
											}
										}									
									}
								}																
							},
							
							{
								en: {
									title: "Unleash your power",
									key: "unleash_your_power",
									data: {
										move: {
											data: {
												condition: "When you [unleash your power] to overcome an obstacle, reshape your environment, or extend your senses, roll +%FREAK%.",
												modifier: "If you’re {Hopeless}, take -2.",

												parts: [
													{
														type: "hit",
														info: "On a hit, you do it.",
														parts: [
															{
																type: "partial",
																info: " On a 7-9 choose one:",
																list: [
																	{
																		title: "mark a <i>condition</i>"
																	},
																	{
																		title: "the GM will tell you how the effect is unstable or temporary"
																	},
																]
															}			
														]
													}			
												]
											}
										}									
									}
								},
								ru: {
									title: "Дай волю силам",
									key: "unleash_your_power",
									data: {
										move: {
											data: {
												condition: "Когда ты <b>даешь волю своим силам</b> для преодоления препятствия, изменения обстановки или расширения чувств, брось +%FREAK%.",
												modifier: "Если ты {в Отчаянии}, получи -2 к броску.",

												parts: [
													{
														type: "hit",
														info: "При успехе у тебя получается.",
														parts: [
															{
																type: "partial",
																info: "На 7-9 выбери 1:",
																list: [
																	{
																		title: "получи {Состояние}"
																	},
																	{
																		title: "ГМ расскажет, чем эффект нестабилен или ограничен"
																	},
																]
															}			
														]
													}			
												]

											}
										}								
									}
								}																
							},
							
							{
								en: {
									title: "Comfort or support",
									key: "comfort_support",
									data: {
										move: {
											data: {
												condition: "When you [comfort or support someone], roll +%MUNDANE%.",
												modifier: "If you’re {Angry}, take -2",
												
												parts: [
													{
														type: "hit",
														info: "On a hit, they hear you, and if they open up to you choose 1:",
														params: {
															list_first: true
														},
														parts: [
															{
																type: "great",
																info: "On a 10+ you can also choose 1:",
																list: [
																	{
																		title: "add a {Team} to the pool",
																	},
																	{
																		title: "clear {condition} yourself",
																	}
																]				
															}
														],
														list: [
															{
																title: "mark {potential}",
															},
															{
																title: "clear {<i>c}ondition}",
															},
															{
																title: "shift {<i>}labels}",
															}
														]		
													}
												]											
											}
										}									
									}
								},
								ru: {
									title: "Утешь или поддержи",
									key: "comfort_support",
									data: {
										move: {
											data: {
												condition: "Когда ты [утешаешь или поддерживаешь кого-то], брось +%MUNDANE%.",
												modifier: "Если ты {Злишься}, получи -2 к броску.",

												parts: [
													{
														type: "hit",
														info: "При успехе цель слышит вас и, если откроется в ответ, выбирает 1:",
														params: {
															list_first: true
														},
														
														parts: [
															{
																type: "great",
																info: "На 10+ ты также можешь выбрать 1:",
																list: [
																	{
																		title: "добавить 1 в {Тимпул}",
																	},
																	{
																		title: "очистить свое {Состояние}",
																	}
																]				
															}
														],
														list: [
															{
																title: "отмечает {Потенциал}",
															},
															{
																title: "очищает {Состояние}",
															},
															{
																title: "передвигает {Ярлыки}",
															}
														]		
													}
												]	
											}
										}									
									}
								}																
							},
							
							{
								en: {
									title: "Pierce the mask",
									key: "pierce_mask",
									data: {
										move: {
											data: {
												condition: "When you [pierce someone's mask] to see the person beneath, roll +%MUNDANE%.",
												modifier: "If you’re {Angry}, take -2",
												
												parts: [
													{
														type: "hit",
														info: "On a hit",
														parts: [
															{
																type: "great",
																info: "On a 10+ ask three",
																		
															},
															{
																type: "partial",
																info: "On a 7-9 ask one",
																		
															}
														],
														list: [
															{
																title: "what are you really planning?"
															},
															{
																title: "what do you want me to do?"
															},
															{
																title: "what do you intend to do?"
															},
															{
																title: "how could I get you character to ______?"
															},
															{
																title: "how could I gain <i>Influence</i> over you?"
															},
														]		
													}
												]

											}
										}									
									}
								},
								ru: {
									title: "Загляни за маску",
									key: "pierce_mask",
									data: {
										move: {
											data: {
												condition: "Когда ты <b>срываешь чью-то маску</b>, чтобы разглядеть под ней личность, брось +%MUNDANE%.",
												modifier: "Если ты {Злишься}, получи -2 к броску.",
																								
												parts: [
													{
														type: "hit",
														info: "При успехе",
														parts: [
															{
																type: "great",
																info: "На 10+ спроси 3",
																		
															},
															{
																type: "partial",
																info: "На 7-9 спроси 1",
																		
															}
														],
														list: [
															{
																title: "что ты планируешь на самом деле?"
															},
															{
																title: "что ты хочешь, чтобы сделал я?"
															},
															{
																title: "что ты собираешься сделать?"
															},
															{
																title: "как я могу заставить твоего персонажа ______?"
															},
															{
																title: "как я могу получить на тебя <i>Влияние</i>?"
															},
														]		
													}
												]

											}
										}									
									}
								}																
							},
							
							{
								en: {
									title: "Defend",
									key: "defend",
									data: {
										move: {
											data: {
												condition: "When you [defend someone or something] from immediate threat, roll +%SAVIOR%.",
												modifier: "If you’re {Insecure}, take -2",
												
												parts: [
													{
														type: "NPC",
														title: "For NPC threats",
														
														parts: [
															{
																type: "hit",
																title: "On a hit you keep them safe and choose 1",
																params: {
																	list_first: true
																},
																list: [
																	{
																		title: "add a <i>Team</i> to the pool"
																	},
																	{
																		title: "take <i>Influence</i> over someone your protect"
																	},
																	{
																		title: "clear a <i>Condition</i>"
																	}
																],
																
																parts: [
																	{
																		title: "On a 7-9 it costs to you choose 1:", 
																		list: {
																			data: [	
																				{
																					title: "expose yourself to danger",					
																				},
																				{
																					title: "escalate the situation",					
																				},
																			]
																		}			
																	}
																]
															}
														]
													},
													{
														type: "PC",
														title: "For PC threats",
														
														parts: [
															{
																type: "hit",
																title: "On a hit, give them -2 to their roll",															
																
																parts: [
																	{
																		title: "On a 7-9, you expose yourself to coast, retribution, or judgment", 																				
																	}
																]
															}
														]
													}
												]	
												
											}
										}									
									}
								},
								ru: {
									title: "Защити",
									key: "defend",
									data: {
										move: {
											data: {
												condition: "Когда ты [защищаешь кого-то или что-то] от непосредственной угрозы, брось +%SAVIOR%.",
												modifier: "Если ты {Неуверен}, получи -2 к броску.",

												parts: [
													{
														type: "NPC",
														title: "Для защиты от NPC",
														
														parts: [
															{
																type: "hit",
																info: "При успехе ты справился, выбери что-то одно:",
																params: {
																	list_first: true
																},
																list: [
																	{
																		title: "добавь 1 в {Тимпул}"
																	},
																	{
																		title: "получи {Влияние} на того, кого защитил"
																	},
																	{
																		title: "очисти 1 {Состояние}"
																	}
																],
																
																parts: [
																	{
																		type: "partial",
																		info: "На 7-9 успех достался некой ценой, выбери 1:", 
																		list: {
																			data: [	
																				{
																					title: "ты подвергся опасности",					
																				},
																				{
																					title: "ситуация накалилась",					
																				},
																			]
																		}			
																	}
																]
															}
														]
													},
													{
														type: "PC",
														title: "Для защиты от РС",
														
														parts: [
															{
																type: "hit",
																info: "При успехе, он получают -2 к броску",															
																
																parts: [
																	{
																		type: "partial",
																		info: "На 7-9 ты подвергаешь себя возмездию, осуждению или чем то жертвуешь", 																				
																	}
																]
															}
														]
													}
												]	
												
											}
										}									
									}
								}																
							},
							
							
							{
								en: {
									title: "Asses the situation",
									key: "asses_sitiation",
									data: {
										move: {
											data: {
												condition: "When you [assess the situation], roll +%SUPERIOR%.",
												modifier: "If you’re {Guilty}, take -2.",
												
												parts: [
													{
														type: "hit",
														info: "On a hit",
														after: "Take +1 while acting on the answers",
														
														parts: [
															{
																type: "great",
																info: "On a 10+ ask 2",																		
															},
															{
																type: "partial",
																info: "On a 7-9 ask 1",
																		
															}
														],
														list: [
															{
																title: "what here can I use to ______?"
															},
															{
																title: "what here is the biggest threat?"
															},
															{
																title: "what here is in the greatest danger?"
															},
															{
																title: "who here is mos vulnerable to me?"
															},
															{
																title: "how could we best end this quickly?"
															},
														]		
													}
												]													
											}
										}									
									}
								},
								ru: {
									title: "Оцени ситуацию",
									key: "asses_sitiation",
									data: {
										move: {
											data: {
												condition: "Когда ты [оцениваешь ситуацию], брось +%SUPERIOR%.",
												modifier: "Если ты {Виноват}, получи -2 к броску.",
												
												parts: [
													{
														type: "hit",
														info: "При успехе",
														after: "Получи +1, когда действуешь согласно ответам.",
														
														parts: [
															{
																type: "great",
																info: "На 10+ задай 2 вопроса",																		
															},
															{
																type: "partial",
																info: "На 7-9 задай 1 вопрос",
																		
															}
														],
														list: [
															{
																title: "что здесь я могу использовать для ______?"
															},
															{
																title: "что здесь самая большая угроза?"
															},
															{
																title: "что здесь в наибольшей опасности?"
															},
															{
																title: "кто здесь наиболее уязвим для меня?"
															},
															{
																title: "как наиболее быстро покончить с этим наилучшим образом?"
															},
														]		
													}
												]												
											}
										}									
									}	
								}									
							},
						
							{
								en: {
									title: "Provoke someone",
									key: "provoke",
									data: {
										move: {
											data: {
												condition: "When you [provoke someone] susceptible to your words, say what you're trying to get them to do and roll +%SUPERIOR%.",
												modifier: "If you’re {Guilty}, take -2.",

												parts: [
													{
														type: "NPC",
														title: "For NPC's",
														
														parts: [
															{
																type: "hit",
																info: "On a hit",															
																
																parts: [
																	{
																		info: "On a 10+, they rise to the bait and do what you want", 
																		type: 'great'
																	},
																	{
																		info: "On a 7-9, they can instead choose one", 
																		type: 'partial',
																		list: [
																			{
																				title: "they stumble: you take +1 forward against them"
																			},
																			{
																				title: "they err: you gain the critical opportunity"
																			},
																			{
																				title: "they overreact: you gain {Influence} over them"
																			}
																		],	
																	}
																]
															}
														]
													},
													{
														type: "PC",
														title: "For PC threats",
														
														parts: [
															{
																type: "hit",
																info: "On a hit",														
																
																parts: [
																	{
																		type: "great",
																		info: "On a 10+, both",
																	},
																	{
																		type: "partial",
																		info: "On a 7-9, choose ome",
																	}
																],
																list: [
																	{
																		title: "if they do it, add a {Team} to the pool"
																	},
																	{
																		title: "if they don't do it, they mark a {Condition}"
																	}
																	
																],	
															}
														]
													}
												]												
											}
										}									
									}
								},
								ru: {
									title: "Спровоцируй кого-то",
									key: "provoke",
									data: {
										move: {
											data: {
												condition: "Когда ты [провоцируешь кого-то], кто восприимчив к твоим словам, скажи, что ты хочешь, чтобы он сделал и брось +%SUPERIOR%.",
												modifier: "Если ты {Виноват}, получи -2 к броску.",

												parts: [
													{
														type: "NPC",
														title: "Для NPC",
														
														parts: [
															{
																type: "hit",
																info: "При успехе",																
																
																parts: [
																	{
																		type: "great",
																		info: "На 10+, цель поведется и сделает, что ты хочешь", 
																		
																	},
																	{
																		type: "partial",
																		info: "На 7-9, цель может вместо этого выбрать одно:", 
																		list: [
																			{
																				title: "промедлить: ты получаешь +1 на следующий бросок против него"
																			},
																			{
																				title: "ошибиться: ты получаешь уникальную возможность"
																			},
																			{
																				title: "остро отреагировать: ты получаешь на него {Влияние}"
																			}
																		],	
																	}
																]
															}
														]
													},
													{
														type: "PC",
														title: "Для PC",
														
														parts: [
															{
																type: "hit",
																info: "При успехе",															
																
																parts: [
																	{
																		type: "great",
																		info: "На 10+ выбери оба",
																	},
																	{
																		type: "partial",
																		info: "На 7-9 выбери 1",
																	}
																],
																list: [
																	{
																		title: "если сделает, добавь 1 в {Тимпул}"
																	},
																	{
																		title: "если не сделает, он отмечает {Состояние}"
																	}
																	
																],	
															}
														]
													}
												]											
											}
										}									
									}	
								}									
							},
						
							{
								en: {
									title: "Take a powerful blow",
									key: "powerful_blow",
									data: {
										move: {
											data: {
												condition: "When you [take a powerful blow], roll +%condition marked%.",
														
												parts: [
													{
														type: "hit",
														info: "On a hit",															
														
														parts: [
															{
																info: "On a 10+, choose one:", 
																type: 'great',
																list: [
																	{
																		title: "you must remove yourself from the situation: flee, pass out, etc."
																	},
																	{
																		title: "you lose control of yourself or your powers in a terrible way"
																	},
																	{
																		title: "two option from the 7-9 list"
																	}
																],	
															},
															{
																info: "On a 7-9, choose one:", 
																type: 'partial',
																list: [
																	{
																		title: "you lash out verbally: {Provoke} a teammate to foolhardy action or take advantage of your influence to inflict a {Condition}"
																	},
																	{
																		title: "you give ground: your opposition gets an opportunity"
																	},
																	{
																		title: "you struggle past the pain: mark two {Conditions}"
																	}
																],	
															},
															{
																info: "On a miss, you stand strong. Mark {Potential} as normal, and say how you weather the blow.", 
																type: 'miss',
															}
														]
													}
												]
													
											
																							
											}
										}									
									}
								},
								ru: {
									title: "Получи мощный удар",
									key: "powerful_blow",
									data: {
										move: {
											data: {
												condition: "Когда ты [получаешь мощный удар], брось +%отмеченные Состояния%.",
														
												parts: [
													{
														type: "hit",
														info: "При успехе",															
														
														parts: [
															{
																info: "На 10+ выбери 1:", 
																type: 'great',
																list: [
																	{
																		title: "ты должен немедленно покинуть сцену, cбежать, потерять сознание и т.д."
																	},
																	{
																		title: "ты теряешь контроль над собой либо своими силами жутким образом"
																	},
																	{
																		title: "два варианта из 7-9"
																	}
																],	
															},
															{
																info: "На a 7-9 выбери 1:", 
																type: 'partial',
																list: [
																	{
																		title: "ты срываешься словесно: {Спровоцируй} члена команды на безпассудный поступок или злоупотреби {Влиянием} и отметь ему {Состояние}"
																	},
																	{
																		title: "ты отступаешь: твой противник получает {Возможность}"
																	},
																	{
																		title: "ты преодалеваешь боль: отметь два {Состояния}"
																	}
																],	
															},
														]
													},

													{
														info: "При провале ты держишся достойно. Отметь {Потенциал}, как при обычном провале, и расскажи, как ты выдержитваешь удар.", 
														type: 'miss',
													}
												]
													
											
																							
											}
										}									
									}
								}									
							},
						
						
						]
					
				},
				{
					title: "Особые ходы",
					key: "periphreal_moves",
					color: "",
					ico: "",
					type: 0,
					group: {
						by: "type",
						rules: {
							0: "Влияние",
							1: "Командные ходы",
							2: "Состояния",
							3: "Ярлыки"
						}
					},
					sub: [
						{
							en: {
								title: "Using influence",
								key: "using_influence",
								type: 0,
								data: {
									move: {
										data: {
											condition: "When [someone with Influence over you tells you who you are or how the world works], {accept what they say} or <reject their influence#player_moves|periphreal_moves|reject_influence>.",
											
											parts: [
												{
													info: "If you [accept what they say], the GM adjusts your {Labels} accordingly",
													
												},

												{
													info: "if you [want to keep your Labels] as they are, you must <reject their influence#player_moves|periphreal_moves|reject_influence>.", 
									
												}
											]
											
										}
									}									
								}
							},
							ru: {
								title: "Подвергнись влиянию",
								key: "using_influence",
								type: 0,
								data: {
									move: {
										data: {
											condition: "Когда [кто-то, обладающий на тебя Влиянием, начинает поучать тебя, говоря кто ты или рассказывать как устроен мир], {согласись с его словами} или <отвергни его Влияние#player_moves|periphreal_moves|reject_influence>.",
											
											parts: [
												{
													info: "Если ты [соглашаешься с его словами], ГМ перераспределит соответсвенно твои {Ярлыки}",
													
												},

												{
													info: "Если ты [хочешь сохранить значения своих Ярлыков], ты должен <отвергнуть его Влияние#player_moves|periphreal_moves|reject_influence>.", 
									
												}
											]
											
										}
									}									
								}				
							}															
						},

						{
							en: {
								title: "Reject someone's influence",
								key: "reject_influence",
								type: 0,
								data: {
									move: {
										data: {
											condition: "When you [reject someone's influence], roll.",
											modifier: "If you’re {Insecure}, take -2",
											
											parts: [
												{
													type: "hit",
													info: "On a hit, you successfully hold to yourself and tune them out.",
													parts: [
														{
															type: "great",
															info: "On a 10+, choose two",
																	
														},
														{
															type: "partial",
															info: "On a 7-9, choose one",
																	
														}
													],
													list: [
														{
															title: "clear a {Condition} or mark {Potential} by immediately acting to prove them wrong"
														},
														{
															title: "shift one {Label} up and one {Label} down, your choice"
														},
														{
															title: "cancel their {Influence} and take +1 forward against them"
														}
													]		
												},

												{
													info: "On a miss, their words hit you hard. Marc a {Condition}, and the GM will adjust your {Labels}.", 
													type: 'miss',
												}
											]
											
										}
									}									
								}
							},
							ru: {
								title: "Отвергни чье-то влияние",
								key: "reject_influence",
								type: 0,
								data: {
									move: {
										data: {
											condition: "Когда ты [отвергаешь чье-то влияние], брось 2d6.",
											modifier: [
												"Если у тебя есть {Влияние} на цель, получи +1 к броску",
												"Если ты {Неуверен}, получи -2 к броску"
											],
											
											parts: [
												{
													type: "hit",
													info: "При успехе ты отлично держишь себя в руках и игнорируешь влияние.",
													parts: [
														{
															type: "great",
															info: "На 10+ выбери 2",
																	
														},
														{
															type: "partial",
															info: "На 7-9 выбери 1",
																	
														}
													],
													list: [
														{
															title: "очисть {Состояние} или отметь {Потенциал}, немедленно показав действием их неправоту"
														},
														{
															title: "двинь один свой {Ярлык} вверх, другой вниз, на свой выбор"
														},
														{
															title: "избавься от его {Влияния} и получи +1 к следующему против него"
														}
													]		
												},

												{
													info: "При провале его слова сильно задевают тебя. Отметь {Состояние}, а ГМ перераспределит значения твоих {Ярлыков}", 
													type: 'miss',
												}
											]
											
										}
									}									
								}							
							}															
						},
						
						{
							en: {
								title: "Take advantage of your Influence",
								key: "advantage_influence",
								type: 0,
								data: {
									move: {
										data: {
											condition: "When you [take advantage of your Influence] over someone, surrender the Influence you hold over them to choose one.",
											
											parts: [
												{												
													list: [
														{
															title: "give them -2 on a move they just made (after the roll)"
														},
														{
															title: "inflict a [condition] on them"
														},
														{
															title: "take an additional +1 on a move targeting them (after the roll)"
														}
													]		
												}
											]
										}
									}									
								}
							},
							ru: {
								title: "Злоупотреби влиянием",
								key: "advantage_influence",
								type: 0,
								data: {
									move: {
										data: {
											condition: "Когда ты [злоупотребляешь своим Влиянием] на кого-то, откажись от {Влияния}, выбрав 1.",
											
											parts: [
												{												
													list: [
														{
															title: "дай -2 на ход, который цель только что сделала (после броска)"
														},
														{
															title: "отметь цели [Состояние]"
														},
														{
															title: "получи дополнительно +1 на ход, нацеленный на него (после броска)"
														}
													]		
												}
											]
										}
									}									
								}					
							}															
						},
						
						{
							en: {
								title: "Using Team",
								key: "using_team",
								type: 1,
								kind: 0,
								data: {
									move: {
										data: {
											condition: "When you [help your teammate], spend a {Team} out of the pool to give +1 on a move, after the roll.",
										}
									}									
								}
							},
							ru: {
								title: "Используй Тимпул",
								key: "using_team",
								type: 1,
								kind: 0,
								data: {
									move: {
										data: {
											condition: "Когда ты [помогаешь сокоманднику], потрать 1 из {Тимпула}, чтобы дать +1 к ходу после броска.",
										}
									}									
								}				
							}															
						},
						
						{
							en: {
								title: "Spending Team selfishly",
								key: "spending_team_selfishly",
								type: 1,
								data: {
									move: {
										data: {
											condition: "When you [act selfishly], say how your actions ignore or insult your teammates, remove one Team from the pool, and shift one Label up and on e Label down, your choice. You can use this option after rolling to alter the Label you’re rolling with.",
										}
									}									
								}
							},
							ru: {
								title: "Потрать Тимпул эгоистично",
								key: "spending_team_selfishly",
								type: 1,
								data: {
									move: {
										data: {
											condition: "Когда ты [действуешь эгоистично], расскажи, как твои действия игнорируют или оскорбляют сокомандников. Удали одно очко Тимпула, и двинь один из своих {Ярлыков} вверх, адругой вниз, по своему выбору. Этим можно воспользоваться после броска, чтобы изменить значения {Ярлыка} от которого был совершен бросок.",
										}
									}									
								}				
							}															
						},

						{
							en: {
								title: "Adding team to the pool",
								key: "adding_teampool",
								type: 1,
								data: {
									move: {
										data: {
											condition: "When you [enter battle against a dangerous foe as a team], add two to the {Team pool}.",
											
											parts: [
												{												
													list: [
														{
															title: "If the leader has {Influence} over every teammate, add another {Team}."
														},
														{
															title: "If everyone has the same purpose in the fight, add another {Team}."
														},
														{
															title: "If any team member mistrusts the leader or the team, remove a {Team}."
														},
														{
															title: "If your team is ill-prepared or off-balance, remove a {Team}."
														}
													]		
												},
												{
													info: "The leader of the team can mark a {condition} to avoid removing a {Team} from the pool."
												}
											]
										}
									}									
								}
							},
							ru: {
								title: "Добавь в Тимпул",
								key: "adding_teampool",
								type: 1,
								data: {
									move: {
										data: {
											condition: "Когда вы [вступаете в битву против опасного опротивника как команда], добавьте два в {Тимпул}.",
											
											parts: [
												{												
													list: [
														{
															title: "Если у лидера есть {Влияние} на всех в команде, добавь еще 1."
														},
														{
															title: "Если у всех одна цель в битве, добавь еще 1."
														},
														{
															title: "Если кто-то в команде не доверяет лидеру или команде, удалите 1."
														},
														{
															title: "Если команда не готова к битве или выведена из равновесия, удалите 1."
														}
													]		
												},
												{
													info: "Лидер может отметить {Состояние}, чтобы избежать удаления очков из {Тимпула}."
												}
											]
										}
									}									
								}		
							}															
						},

						{
							en: {
								title: "Мark a condition",
								key: "mark_condition",
								type: 2,
								kind: 0,
								data: {
									move: {
										data: {
											condition: "When a move tells you [to mark a condition]",
										
											parts: [
												{												
													list: [
														{
															title: "Unless it says otherwise, mark any {condition} you choose"
														},
														{
															title: "Sometimes the GM tells you a specific {condition} to mark, especially after a {hard move}."
														},
														{
															title: "If you [need to mark a condition] and all {conditions} are already marked, you’re taken out. You lose consciousness or flee the scene — one way or another, you cannot continue there."
														},
														
													]		
												},
											
											]
										}
									}									
								}
							},
							ru: {
								title: "Отметь состояние",
								key: "mark_condition",
								type: 2,
								kind: 0,
								data: {
									move: {
										data: {
											condition: "Когда ход говорит [отметить Состояние]",
										
											parts: [
												{												
													list: [
														{
															title: "Отметь любое {Состояние} на свой выбор, если не сказано иначе"
														},
														{
															title: "Иногда ГМ говорит отметить конкретное {состояние}, особенно после {жёсткого хода}."
														},
														{
															title: "Если тебе [необходимо отметить Состояние], но все {состояния} уже отмечены, ты выбываешь из сцены. Ты теряешь сознание или скрываешься с места происшествия — так или иначе, ты не можешь продолжить участие в этой сцене."
														},
														
													]		
												},
											
											]
										}
									}									
								}		
							}															
						},

						{
							en: {
								title: "Clear a condition",
								key: "clear_condition",
								type: 2,
								kind: 0,
								data: {
									move: {
										data: {
											condition: "At the end of any scene in which you [take the corresponding action], clear that {condition}.",
										
											parts: [
												{												
													list: [
														{
															title: "To clear Angry, hurt someone or break something important."
														},
														{
															title: "To clear Afraid, run from something difficult."
														},
														{
															title: "To clear Guilty, make a sacrifice to absolve your guilt."
														},
														{
															title: "To clear Hopeless, fling yourself into easy relief."
														},
														{
															title: "To clear Insecure, take foolhardy action without talking to your team."
														},
														
													]		
												},
											
											]
										}
									}									
								}
							},
							ru: {
								title: "Очисти состояние",
								key: "clear_condition",
								type: 2,
								kind: 0,
								data: {
									move: {
										data: {
											condition: "В конце любой сцены, где ты [предпринял конкретное дейстиве], очисти соответсвующее {Состояние}.",
										
											parts: [
												{												
													list: [
														{
															title: "Перестань {Злиться}, причинив кому-то боль или сломав что-то важное."
														},
														{
															title: "Перестань {Бояться}, сбежав от чего-то трудного."
														},
														{
															title: "Избавься от {Вины}, пожертвовав чем-то для искупленния вины."
														},
														{
															title: "Избавься от {Отчаяния}, с головой погружившись в простые удовольствия."
														},
														{
															title: "Избавься от {Неуверенности}, совершив безрассудный поступок, не посоветовавшись с командой."
														},
														
													]		
												},
											
											]
										}
									}									
								}	
							}															
						},
					]
				},
				{
					title: "Взрослые ходы",
					key: "adult_moves",
					color: "",
					ico: "",
					type: 0,
					sub: [
						{
							en: {
								title: "Wield your powers",
								key: "wield_powers",
								data: {
									move: {
										data: {
											condition: "When you [wield your powers] with precision or grace, roll +%FREAK%.",
											
											parts: [
												{
													type: "hit",
													info: "On a hit, choose one.",
													parts: [
														{
															type: "great",
															info: "On a 10+, choose two",
																	
														},
													],
													list: [
														{
															title: "take hold of something vulnerable to you"
														},
														{
															title: "create something useful from your envinronment"
														},
														{
															title: "neutralize an opponent or threat, at least for now"
														},
													]		
												}
											]
											
										}
									}									
								}
							},
							ru: {
								title: "Умело примени силы",
								key: "wield_powers",
								data: {
									move: {
										data: {
											condition: "Когда ты [умело применяешь свои силы] с точностью или грациозностью, брось +%FREAK%.",
											
											parts: [
												{
													type: "hit",
													info: "При успехе выбери 1.",
													parts: [
														{
															type: "great",
															info: "На 10+ выбери 2",
																	
														},
													],
													list: [
														{
															title: "завладей чем-нибудь "
														},
														{
															title: "создай что-нибудь полезное с помошью своего окружения"
														},
														{
															title: "обезвредь противника или иную угрозу, как минимум на некоторое время"
														},
													]		
												}
											]
											
										}
									}									
								}
							}
															
						},
						{
							en: {
								title: "Overwhelm a vulnerable foe",
								key: "Overwhelm_foe",
								data: {
									move: {
										data: {
											condition: "When you [overhelm a vulnerable foe], roll +%DANGER%.",
											
											parts: [
												{
													type: "hit",
													info: "On a hit, the fight's over. They're done.",
													parts: [
														{
															type: "great",
															info: "On a 10+, choose one",
																	
														},
														{
															type: "partial",
															info: "On a 7-9 choose two",
																	
														}
													],
													list: [
														{
															title: "you take a powerful blow in turn"
														},
														{
															title: "you hurt your foe more than you intended"
														},
														{
															title: "you cause serious collateral damage"
														},
													]		
												}
											]
											
										}
									}									
								}
							},
							ru: {
								title: "Сокруши уязвимого противника",
								key: "Overwhelm_foe",
								data: {
									move: {
										data: {
											condition: "Когда ты [сокрушаешь уязвимого противника], брось +%DANGER%.",
											
											parts: [
												{
													type: "hit",
													info: "При успехе бой завершен. Противник побежден.",
													parts: [
														{
															type: "great",
															info: "На 10+ выбери 1",
																	
														},
														{
															type: "partial",
															info: "На 7-9 выбери 2",
																	
														}
													],
													list: [
														{
															title: "ты, в свою очередь, получаешь [мощный удар]"
														},
														{
															title: "ты ранил врага сильнее, чем намеревался"
														},
														{
															title: "ты вызвал серьезный побочный ущерб"
														},
													]		
												}
											]
											
										}
									}									
								}
							}
															
						},
						{
							en: {
								title: "Persuade with best interests",
								key: "Persuade",
								data: {
									move: {
										data: {
											condition: "When you [persuade someone with their best interests], roll +%SUPERIOR%.",
											
											parts: [
												{
													type: "NPC",
													title: "If they're an NPC",

													parts: [
														{
															type: "hit",
															info: "On a hit",
															parts: [
																{
																	type: "great",
																	info: "On a 10+, they buy it and act  accordingly",
																			
																},
																{
																	type: "partial",
																	info: "On a 7-9 they need concrete assurance, right now",
																			
																}
															]
														}
													]
												},
												{
													type: "PC",
													title: "If trey're a PC",

													parts: [
														{
															type: "hit",
															info: "On a hit, they can mark [potential] or shift their own [Labels] if they do what you want",
															parts: [
																{
																	type: "great",
																	info: "On a 10+, take [Influence] over them as well",
																			
																}
															]
														}
													]
												}
											]
											
										}
									}									
								}
							},
							ru: {
								title: "Убеди кого-то ради его же интересов",
								key: "Persuade",
								data: {
									move: {
										data: {
											condition: "Когда ты [убеждлаешь кого-то ради его же интересов], брось +%SUPERIOR%.",
											
											parts: [
												{
													type: "NPC",
													title: "Для NPC",

													parts: [
														{
															type: "hit",
															info: "При успехе",
															parts: [
																{
																	type: "great",
																	info: "На 10+ цель купилась и действует соответсвенно",
																			
																},
																{
																	type: "partial",
																	info: "На 7-9 нужны конкретные гарантии здесь и сейчас",
																			
																}
															]
														}
													]
												},
												{
													type: "PC",
													title: "Для PC",

													parts: [
														{
															type: "hit",
															info: "При успехе цель отмечает [Потенциал] либо двигает себе [Ярлыки] если делает то, что ты хочешь",
															parts: [
																{
																	type: "great",
																	info: "На 10+, еще и получи на цель [Влияние]",
																			
																}
															]
														}
													]
												}
											]
											
										}
									}									
								}
							}
															
						},
						{
							en: {
								title: "Emppathize",
								key: "Empathize",
								data: {
									move: {
										data: {
											condition: "When you [openly empathize with someone], roll +%MUNDANE%.",
																						
											parts: [
												{
													type: "hit",
													info: "On a hit, they must reveal a vulnerability or mark a [condition]",
													parts: [
														{
															type: "great",
															info: "On a 10+, take [influence] over them as well",
																	
														}
													]
												}
											]
											
											
											
										}
									}									
								}
							},
							ru: {
								title: "Сопереживай",
								key: "Empathize",
								data: {
									move: {
										data: {
											condition: "Когда ты [открыто сопереживаешь кому-то], брось +%MUNDANE%.",
																						
											parts: [
												{
													type: "hit",
													info: "При успехе цель должна проявить [уязвимость] либо отметить [Состояние]",
													parts: [
														{
															type: "great",
															info: "На 10+, также получи [Влияние] на цель",
																	
														}
													]
												}
											]
											
											
											
										}
									}									
								}
							}															
						},
						{
							en: {
								title: "Stand up for something",
								key: "stand_up_for_smth",
								data: {
									move: {
										data: {
											condition: "When you [stand up for something], roll +%SAVIOR%.",
											
											parts: [
												{
													type: "hit",
													info: "On a hit",
													parts: [
														{
															type: "great",
															info: "On a 10+, choose two",																	
														},
														{
															type: "partial",
															info: "On a 7-9+, choose one",																	
														},
													],
													list: [
														{
															title: "listeners can't keep doing what they're doing"
														},
														{
															title: "listeners can't flee without addressing you"
														},
														{
															title: "listeners can't attack you without losing status or position"
														},
													]		
												}
											]
											
										}
									}									
								}
							},
							ru: {
								title: "Произнеси речь",
								key: "stand_up_for_smth",
								data: {
									move: {
										data: {
											condition: "Когда ты [произночишь геройскую речь], отставивая свои убеждения, брось +%SAVIOR%.",
											
											parts: [
												{
													type: "hit",
													info: "При успехе",
													parts: [
														{
															type: "great",
															info: "На 10+ выбери 2",																	
														},
														{
															type: "partial",
															info: "На 7-9+ выбери 1",																	
														},
													],
													list: [
														{
															title: "цель отвлекается от своих действий"
														},
														{
															title: "цель не может сбежать, не ответив тебе"
														},
														{
															title: "цель не может атаковать тебя, не уронив лицо или не сдав позциию"
														},
													]		
												}
											]
											
										}
									}									
								}
							}
															
						},
					]
				},
				{
					title: "Маяк",
					key: "beacon",
					color: "",
					ico: "",
					type: 1,				
					sub: [
						{
							en: {
								title: "Straight. Up. Creepin’",
								key: "straight_up",
								data: {
									move: {
										data: {
											condition: "When you [scope out a person or place], roll +%MUNDANE%.",
											
											parts: [
												{
													type: "hit",
													info: "On a hit...",
													parts: [
														{
															type: "great",
															info: "On a 10+, ask two.",
																	
														},
														{
															type: "partial",
															info: "On a 7-9, ask one.",
																	
														},
													],
													list: [
														{
															title: "what’s my best way in/out?"
														},
														{
															title: "what happened here recently?"
														},
														{
															title: "what here is worth grabbing?"
														},
														{
															title: "who or what here is not what they seem?"
														},
														{
															title: "whose place is this?"
														},
													]		
												},
												{
													type: "miss",
													info: "On a miss, you find yourself in over your head. The GM will tell you why this is a bad spot.",
															
												},
											],
											
											notes: "<No powers and not nearly enough training#player_moves|beacon|no_powers> requires you to pay attention to gear. Most other characters only care about stuff like ray guns and special devices when they’re immediately dangerous, but you should be listening for cool stuff you can pick up whenever possible. <Assessing the situation#player_moves|basic_moves|asses_sitiation> and <Straight. Up. Creepin’]. are great ways to flag cool stuff you can use."
										}
									}									
								}
							},
							ru: {
								title: "Удачный кадр",
								key: "straight_up",
								data: {
									move: {
										data: {
											condition: "[Осмотрев человека или место], брось +%MUNDANE%.",
											
											parts: [
												{
													type: "hit",
													info: "При успехе...",
													parts: [
														{
															type: "great",
															info: "На 10+ спроси 2.",
																	
														},
														{
															type: "partial",
															info: "На 7-9 спроси 1.",
																	
														},
													],
													list: [
														{
															title: "каков лучший способ выйти/войти?"
														},
														{
															title: "что здесь недавно произошло?"
														},
														{
															title: "что тут стоило бы забрать себе?"
														},
														{
															title: "что или кто здесь не то, чем кажется?"
														},
														{
															title: "чье это место?"
														},
													]		
												},
												{
													type: "miss",
													info: "При провале ты находишь проблемы, на свою голову, ГМ расскажет какие.",
															
												},
											],
											
											notes: "<No powers and not nearly enough training#player_moves|beacon|no_powers> requires you to pay attention to gear. Most other characters only care about stuff like ray guns and special devices when they’re immediately dangerous, but you should be listening for cool stuff you can pick up whenever possible. <Assessing the situation#player_moves|basic_moves|asses_sitiation> and [Straight. Up. Creepin’] are great ways to flag cool stuff you can use."

										}
									}									
								}
							}
						},
						{
							en: {
								title: "No powers and not nearly enough training",
								key: "no_powers",
								data: {
									move: {
										data: {
											info: "You’re always picking up new gear to keep yourself in the game. Whenever you pick up a new piece of gear, you can write it in as a new ability if this line is empty.||________",
											condition: "The first time you [u]se each piece of gear] to <directly engage a threat#player_moves|basic_moves|directly_engage_threat>, <unleash your powers#player_moves|basic_moves|unleash_your_power>, or <defend someone#player_moves|basic_moves|defend>, you can roll +%MUNDANE% instead of the normal {Label}.",
											
											notes: "[No powers and not nearly enough training] requires you to pay attention to gear. Most other characters only care about stuff like ray guns and special devices when they’re immediately dangerous, but you should be listening for cool stuff you can pick up whenever possible. <Assessing the situation#player_moves|basic_moves|asses_sitiation> and <Straight. Up. Creepin’#player_moves|beacon|straight_up>. are great ways to flag cool stuff you can use."
											}
									}									
								}
							},
							ru: {
								title: "Ни сил, ни опыта",
								key: "no_powers",
								data: {
									move: {
										data: {
											info: "Ты постоянно экспериментуриуешь со своей экипировкой. Всякий раз, когда ты берешь новое снаряжение, можешь записать его в качестве способности, если эта строка пуста.||________",
											condition: "Когда ты [впервые используешь часть экипировки] <против явной угрозы#player_moves|basic_moves|directly_engage_threat>, <давая волю силам#player_moves|basic_moves|unleash_your_power> или <защищая кого-нибудь#player_moves|basic_moves|defend>, ты можешь бросать +%MUNDANE% вместо обычного {Ярлыка}.",
											
											notes: "[No powers and not nearly enough training] requires you to pay attention to gear. Most other characters only care about stuff like ray guns and special devices when they’re immediately dangerous, but you should be listening for cool stuff you can pick up whenever possible. <Assessing the situation#player_moves|basic_moves|asses_sitiation> and <Straight. Up. Creepin’#player_moves|beacon|straight_up>. are great ways to flag cool stuff you can use."
											}
									}									
								}
							}
						},
						{
							en: {
								title: "Won’t let you down",
								key: "not_let_you_down",
								data: {
									move: {
										data: {
											condition: "When you [help a teammate], you can spend 2 out of the {Team pool} to add +2 to their roll.",
											}
									}									
								}
							},
							ru: {
								title: "Не подведу",
								key: "not_let_you_down",
								data: {
									move: {
										data: {
											condition: "[Помогая члену команды] ты можешь потратить 2 очка из {тимпаула}, чтобы дать ему +2.",
											}
									}									
								}
							}
						},
						{
							en: {
								title: "Pretty much a superhero",
								key: "pretty_much_a_superhero",
								data: {
									move: {
										data: {
											condition: "When you [bring up your superhero name to someone important] (your call) for the first time, roll +%SAVIOR%.",
											
											parts: [
												{
													type: "hit",
													info: "On a hit, they’ve heard of you; say which of your exploits they’ve heard about and which {Label} they think applies",
													parts: [													
														{
															type: "partial",
															info: "On a 7-9 the GM will tell you something else they’ve heard, and pick a second {Label} they assign to you.",
																	
														},
													]													
												},
												{
													type: "miss",
													info: "On a miss, they don’t take you seriously or mistrust you moving forward.",															
												},
											],

											notes: "[Pretty much a superhero] is your chance to control NPCs’ first impressions on you. It only triggers when you think the other character is actually important, and it lets you frame how they see you — though the GM can complicate it on 7-9. Whatever {Label} you pick is the one they reflect back at you through their {Influence}."
										}
									}									
								}
							},
							ru: {
								title: "Почти супергерой",
								key: "pretty_much_a_superhero",
								data: {
									move: {
										data: {
											condition: "Когда ты [называешь свое супергеройское имя кому-то важному] впервые (по своему выбору), брось +%SAVIOR%.",
											
											parts: [
												{
													type: "hit",
													info: "При успехе он слышал о тебе; скажи какие из твоих подвигов он знает и выбери выражающий это {Ярлык}.",
													parts: [													
														{
															type: "partial",
															info: "На 7-9 ГМ скажет что еще он о тебе слышал и выберет второй {Ярлык}.",
																	
														},
													]													
												},
												{
													type: "miss",
													info: "При провале он не воспринимает тебя всерьез ил не доверяет тебе.",															
												},
											],

											notes: "[Pretty much a superhero] is your chance to control NPCs’ first impressions on you. It only triggers when you think the other character is actually important, and it lets you frame how they see you — though the GM can complicate it on 7-9. Whatever {Label} you pick is the one they reflect back at you through their {Influence}."
										}
									}									
								}
							}
						},
						{
							en: {
								title: "C’mon, Lucky",
								key: "cmon_lucky",
								data: {
									move: {
										data: {
											info: "You have a pet of some kind, a smaller companion that helps you out. Detail it. Choose three <basic moves#player_moves|basic_moves> and tell the GM how it helps you with those moves. [Whenever your pet could help you], take +1 to that move. [If your pet ever gets hurt], treat it as <taking a powerful blow#player_moves|basic_moves|powerful_blow>.",
											}
									}									
								}
							},
							ru: {
								title: "Вперёд, Счастливчик",
								key: "cmon_lucky",
								data: {
									move: {
										data: {
											info: "У тебя есть животное-компаньон, помогающее тебе. Опишите его. Выбери три <основных хода#player_moves|basic_moves> и расскажи ГМу, как питомец помогает с этими ходами. Всякий раз, [когда питомец способен помочь], получи +1 к такому ходу. [Если питомец получает травму], считай это <мощным ударом#player_moves|basic_moves|powerful_blow>.",
											}
									}									
								}
							}
						},
						{
							en: {
								title: "Suck it, Domitian",
								key: "suck_it_domitian",
								data: {
									move: {
										data: {
											condition: "When you [stand strong while dramatically under fire], roll +%SAVIOR% instead of +%DANGER% to <directly engage a threat#player_moves|basic_moves|directly_engage_threat>.",
											notes: "[Suck it, Domitian] requires you to be dramatically under fire — that means the odds are against you, or you’re up against some terrifying threat. If the situation’s well in hand, chances are you’re not dramatically under fire. Of course, you’re ofen underpowered compared to your opposition, so it shouldn’t be too hard to get there."
										}
									}								
								}
							},
							ru: {
								title: "Выкуси, Домициан",
								key: "suck_it_domitian",
								data: {
									move: {
										data: {
											condition: "Когда ты [стоишь стойко, находясь под огнем], брось +%SAVIOR% вместо +%DANGER%  <выступая против явной угрозы#player_moves|basic_moves|directly_engage_threat>.",
											notes: "[Suck it, Domitian] requires you to be dramatically under fire — that means the odds are against you, or you’re up against some terrifying threat. If the situation’s well in hand, chances are you’re not dramatically under fire. Of course, you’re ofen underpowered compared to your opposition, so it shouldn’t be too hard to get there."
										}
									}	
								}
							}
						},
					]
					
				},

				{
					title: "Бык",
					key: "bull",
					color: "",
					ico: "",
					type: 1,				
					sub: [
						{
							en: {
								title: "Thick and thin skinned",
								key: "thick_and_thin",
								data: {
									move: {
										data: {
											info: "Whenever you have {Angry} marked, take +1 ongoing to <unleash your powers#player_moves|basic_moves|unleash_your_power>.",
											}
									}									
								}
							},
							ru: {
								title: "И под толстой шкурой есть чувства",
								key: "thick_and_thin",
								data: {
									move: {
										data: {
											info: "Пока у тебя отмечено состояние {Злой}, получай +1 когда <проявляешь всю свою мощь#player_moves|basic_moves|unleash_your_power>",
											}
									}									
								}
							}
						},
						{
							en: {
								title: "You've got a head you don't need",
								key: "head_you_dont_need",
								data: {
									move: {
										data: {
											condition: "When you <provoke someone#player_moves|basic_moves|provoke> with obvious threats and shows of force, roll +%DANGER% instead of +%SUPERIOR%.",
										}
									}									
								}
							},
							ru: {
								title: "Сила есть ума не надо",
								key: "head_you_dont_need",
								data: {
									move: {
										data: {
											info: "Когда ты <провоцируешь кого-то#player_moves|basic_moves|provoke> с явной угрозой и демонстрацией силы, используй +%DANGER% вместо +%SUPERIOR%.",
										}
									}									
								}
							}
						},
						{
							en: {
								title: "Punch everyone",
								key: "punch_everyone",
								data: {
									move: {
										data: {
											condition: "Whenever you [charge into a fight without hedging your bets], you can shift your {Danger} up and any other {Label} down.",

											notes: "For [Punch everyone], charging into a fight without hedging your bets means dashing into danger without any thought to your own safety or the safety of others. It needs to be meaningful that you aren’t hedging your bets or thinking about what you’re doing. Often, that means you aren’t participating in the move to <generate team#player_moves|periphreal_moves|adding_teampool> for the fight."
										}
									}									
								}
							},
							ru: {
								title: "Время ломать лица",
								key: "punch_everyone",
								data: {
									move: {
										data: {
											condition: "Всякий раз [врываясь в драку и не заботясь о прикрытии], можешь повысить свой Ярлык {Danger} и понизить любой другой.",

											notes: "For [Punch everyone], charging into a fight without hedging your bets means dashing into danger without any thought to your own safety or the safety of others. It needs to be meaningful that you aren’t hedging your bets or thinking about what you’re doing. Often, that means you aren’t participating in the move to <generate team#player_moves|periphreal_moves|adding_teampool> for the fight."
										}
									}									
								}
							}
						},
						{
							en: {
								title: "There when it matters",
								key: "there_when_it_matters",
								data: {
									move: {
										data: {
											condition: "When you <defend someone#player_moves|basic_moves|defend>...",

											parts: [
												{
													type: "hit",
													info: "...on a hit you can {hold 1} instead of choosing one from the list.",
													after: " Spend your {hold} when they are in danger later to arrive on the scene ready to help.",
												}
											],

											notes: "[There when it matters] allows you to appear in a scene you weren’t previously in — just work with the GM to explain how you got there so quickly. It could be anything from you just happening to be in the area to you actively tailing the person you protect."
										}
									}									
								}
							},
							ru: {
								title: "Там, где нужен",
								key: "there_when_it_matters",
								data: {
									move: {
										data: {
											condition: "Когда ты успешно <защищаешь кого-то#player_moves|basic_moves|defend>...",

											parts: [
												{
													type: "hit",
													info: "...можешь получить {1 запас} вместо выбора из вариантов.",
													after: "Можешь потратить {запас} позже, чтобы появитсья в сцене, когда кому-то грозит опасность.",
												}
											],

											notes: "[There when it matters] allows you to appear in a scene you weren’t previously in — just work with the GM to explain how you got there so quickly. It could be anything from you just happening to be in the area to you actively tailing the person you protect."
										}
									}									
								}
							}
						},
						{
							en: {
								title: "In a china shop",
								key: "china_shop",
								data: {
									move: {
										data: {
											condition: "When you <directly engage a threat#player_moves|basic_moves|directly_engage_threat>, you can cause significant collateral damage to your environment to choose an additional option, even on a miss.",
										}
									}									
								}
							},
							ru: {
								title: "В посудной лавке",
								key: "china_shop",
								data: {
									move: {
										data: {
											condition: "<Выходя против явной угрозы#player_moves|basic_moves|directly_engage_threat>, можешь причинить ощутимый ущерб окружению, чтобы выбрать еще 1 вариант, даже при провале.",
										}
									}									
								}
							}
						},
						{
							en: {
								title: "Physics? What physics?",
								key: "what_physics",
								data: {
									move: {
										data: {
											condition: "When you <unleash your powers#player_moves|basic_moves|unleash_your_power> to barrel through an insurmountable barrier, roll +%DANGER% instead of +%FREAK%.",
										}
									}									
								}
							},
							ru: {
								title: "Физика? Какая еще физика?",
								key: "what_physics",
								data: {
									move: {
										data: {
											condition: "Когда ты <даешь волю силам#player_moves|basic_moves|unleash_your_power>, чтобы прорваться через непреодолимый барьер, используй +%DANGER% вместо +%FREAK%.",
										}
									}									
								}
							}
						},

					]
				},
				{
					title: "Бунтарь",
					key: "delinquent",
					color: "",
					ico: "",
					type: 1,				
					sub: [
						{
							en: {
								title: "Mary Contrary",
								key: "mary_contrary",
								type: 0,
								data: {
									move: {
										data: {
											condition: "When someone tries to <pierce your mask#player_moves|basic_moves|pierce_mask>, <comfort or support#player_moves|basic_moves|comfort_support> you, or <provoke#player_moves|basic_moves|provoke> you, you can interfere. Roll +%SUPERIOR%",
											
											parts: [
												{
													type: "hit",
													info: "On a hit, they take a -2 on their roll.",
													parts: [
														{
															type: "great",
															info: "On a 10+, you also take {Influence} over them or clear a {condition}.",
																	
														},
													],														
												},

												{
													info: "On a miss, they get a 10+ no matter what they rolled and you mark a {condition} of their choice.", 
													type: 'miss',
												}
											]
											
										}
									}									
								}
							},
							ru: {
								title: "Мари Контари",
								key: "mary_contrary",
								type: 0,
								data: {
									move: {
										data: {
											condition: "Когда кто-то пытается <заглянуть тебе под маску#player_moves|basic_moves|pierce_mask>, <утешить или поддержать#player_moves|basic_moves|comfort_support> тебя, или <спровоцировать#player_moves|basic_moves|provoke> тебя, ты можешь воспротивиться. Брось +%SUPERIOR%",
											
											parts: [
												{
													type: "hit",
													info: "При успехе цель получает -2 к броску",
													parts: [
														{
															type: "great",
															info: "На 10+ ты получаешь {Влияние} на цель или очищаешь {Состояние}.",
																	
														},
													],														
												},

												{
													info: "При провале его результат становится как 10+, а ты отмечаешь {Состояние} по его выбору.", 
													type: 'miss',
												}
											]
											
										}
									}									
								}						
							}															
						},

						{
							en: {
								title: "I don’t care what you think!",
								key: "dont_care",
								type: 1,
								data: {
									move: {
										data: {
											info: "Whenever you reject others’ {Influence}, add +2 to your roll.",
										}
									}									
								}
							},
							ru: {
								title: "Мне плевать, что вы обо мне думаете!",
								key: "dont_care",
								type: 1,
								data: {
									move: {
										data: {
											info: "Каждый раз отвергая чье-то {Влияние}, получи +2 к своему броску.",
										}
									}									
								}				
							}															
						},

						{
							en: {
								title: "Team? What team?",
								key: "what_team",
								type: 1,
								data: {
									move: {
										data: {
											info: "When you [use {Team} selfishly], clear a {condition} or mark {potential}. The first time in a session that you use Team to <help#player_moves|periphreal_moves|using_team> a teammate, take {+1 forward}.",
										}
									}									
								}
							},
							ru: {
								title: "Команда? Какая команда?",
								key: "what_team",
								type: 1,
								data: {
									move: {
										data: {
											info: "Когда ты [используешь {Тимпул} эгоистично], очисть {Состояние} или отметь {Потенциал}. <Используя тимпул#player_moves|periphreal_moves|using_team> для помощи товарищу в первый раз за сессию, получи {+1 к следующему броску}.",
										}
									}									
								}				
							}															
						},

						{
							en: {
								title: "Criminal mind",
								key: "сriminal_mind",
								type: 0,
								data: {
									move: {
										data: {
											condition: "When you <assess the situation#player_moves|basic_moves|asses_sitiation>, you can always ask one of the following questions, even on a miss:",
											
											parts: [
												{												
													list: [
														{
															title: "what here is useful or valuable to me?"
														},
														{
															title: "how could I best infuriate or provoke ____________?"
														},
														{
															title: "what’s the best way in/way past?"
														}
													]		
												}
											],

											notes: "For [Criminal mind], you still get +1 ongoing to act on the answers to those questions, just like for a normal <assess the situation move#player_moves|basic_moves|asses_sitiation>."
										}
									}									
								}
							},
							ru: {
								title: "Преступный разум",
								key: "advantage_influence",
								type: 0,
								data: {
									move: {
										data: {
											condition: "<Оценивая ситуацию#player_moves|basic_moves|asses_sitiation>, ты можешь задать один из этих вопросов, даже при провале:",
											
											parts: [
												{												
													list: [
														{
															title: "Что здесь полезного или ценного для меня?"
														},
														{
															title: "Как я могу его взбесить или спровоцировать"
														},
														{
															title: "Как лучше всего попасть туда или выбраться?"
														}
													]		
												}
											],

											notes: "For [Criminal mind], you still get +1 ongoing to act on the answers to those questions, just like for a normal <assess the situation move#player_moves|basic_moves|asses_sitiation>."
										}
									}									
								}					
							}															
						},
						
						{
							en: {
								title: "Troublemaker",
								key: "troublemaker",
								type: 1,
								data: {
									move: {
										data: {
											condition: "When you [<help#player_moves|periphreal_moves|using_team> a teammate through destructive, criminal, or rule-breaking actions], you can give them a +2 instead of a +1 when you spend a {Team} from the pool.",
										}
									}									
								}
							},
							ru: {
								title: "Смутьян",
								key: "troublemaker",
								type: 1,
								data: {
									move: {
										data: {
											condition: "Когда ты [<помогаешь#player_moves|periphreal_moves|using_team> товарищу с помощью деструктивных, криминальных или нарушающих правило действий], дай ему +2 вместо +1, тратя очко из {тимпула}.",
										}
									}									
								}				
							}															
						},

						{
							en: {
								title: "Are you watching closely?",
								key: "watching_closely",
								data: {
									move: {
										data: {
											condition: "When you [mislead, distract, or trick someone], roll +%SUPERIOR%.",
											
											parts: [
												{
													type: "hit",
													info: "On a hit, they are fooled, at least for a moment.",
													parts: [
														{
															type: "great",
															info: "On a 10+, choose three.",
																	
														},
														{
															type: "partial",
															info: "On a 7-9, choose two.",
																	
														},
													],
													list: [
														{
															title: "you get an opportunity"
														},
														{
															title: "you expose a weakness or flaw"
														},
														{
															title: "you confuse them for some time"
														},
														{
															title: "you avoid further entanglement"
														},
													]		
												},
												{
													type: "miss",
													info: "On a miss, you’re hopelessly embroiled in it and under pressure; mark a condition.",
															
												},
											],
											
											notes: "For [Are you watching closely?], you’re assumed not to get any of the options that you don’t choose. That means if you don’t choose “You confuse them for some time,” then your trick may not last very long. If you don’t choose “You avoid further entanglement,” then you can assume someone’s going to check up on you later about that deception. Getting an opportunity means you get a chance you might not have had otherwise to take action, and exposing a weakness or flaw means you learn something you might be able to exploit."
										}
									}									
								}
							},
							ru: {
								title: "Следишь за руками?",
								key: "watching_closely",
								data: {
									move: {
										data: {
											condition: "Когда ты [вводишь в заблуждение, отвлекаешь или обманываешь]кого-то, брось +%SUPERIOR%.",
											
											parts: [
												{
													type: "hit",
													info: "При успехе они одурачены хотя бы на мгновение.",
													parts: [
														{
															type: "great",
															info: "На 10+ спроси 3.",
																	
														},
														{
															type: "partial",
															info: "На 7-9 спроси 2.",
																	
														},
													],
													list: [
														{
															title: "ты получил возможность"
														},
														{
															title: "обнаружил слабость или недостаток"
														},
														{
															title: "ты путаешь их на некоторое время"
														},
														{
															title: "избегаешь дальнейших затруднений"
														},
													]		
												},
												{
													type: "miss",
													info: "При провале ты безнадежно увяз во всем этом и находишься под давлением, отметь {Состояние}.",
															
												},
											],
											
											notes: "For [Are you watching closely?], you’re assumed not to get any of the options that you don’t choose. That means if you don’t choose “You confuse them for some time,” then your trick may not last very long. If you don’t choose “You avoid further entanglement,” then you can assume someone’s going to check up on you later about that deception. Getting an opportunity means you get a chance you might not have had otherwise to take action, and exposing a weakness or flaw means you learn something you might be able to exploit."

										}
									}									
								}
							}
						},
						
					]
				},
				{
					title: "Янус",
					key: "janus",
					color: "",
					ico: "",
					type: 1,	
					sub: [
						{
							en: {
								title: "The Mask",
								key: "mask",
								data: {
									move: {
										data: {
											pre: "You wear a mask and hide your real identity. Choose what {Label} you try to embody while wearing your mask:||●[Freak] ●[Danger] ●[Savior] ●[Superior]||Once per session, you can affirm either your heroic or secret identity to switch your {Mundane} with your mask’s {Label}.",
											
											condition: "When you [reveal your secret identity] to someone who didn’t know it already, mark {potential}.",

											notes: "For [The Mask], affirming your secret or masked identity means doing something that firmly plants you in that role. Leaving your teammates to go save your sister might affirm you as your secret identity, even while you’re still wearing your mask. Doing the opposite, going off to fight the Blue Hydra instead of rescuing your sister from the Centipede, might affirm you in your masked role. Affirming your identity should always be a {meaningful choice or action} in the fiction, something with ramifications — good or bad—moving forward."
											},
									}									
								}
							},
							ru: {
								title: "Маска",
								key: "mask",
								data: {
									move: {
										data: {
											pre: "Ты носишь маску, скрывая свою истинную личность. Выбери {Ярлык} который пытаешься воплотить в маске:||●[Freak] ●[Danger] ●[Savior] ●[Superior]||Один раз за сессию ты можешь заявить о своей геройской или скрытной личности и сдвинуть Ярлыки {Mundane} и {Маски}.",
											
											condition: "Когда ты [открываешь свою тайную личность] кому-то, кто еще не знал, отметь {Потенциал}.",

											notes: "For [The Mask], affirming your secret or masked identity means doing something that firmly plants you in that role. Leaving your teammates to go save your sister might affirm you as your secret identity, even while you’re still wearing your mask. Doing the opposite, going off to fight the Blue Hydra instead of rescuing your sister from the Centipede, might affirm you in your masked role. Affirming your identity should always be a {meaningful choice or action} in the fiction, something with ramifications — good or bad—moving forward."
											},
									}																			
								}
							}
						},
						{
							en: {
								title: "Game face",
								key: "game_face",
								data: {
									move: {
										data: {											
											condition: "When you [commit yourself to save someone or defeat a terrible enemy], mark a {condition} and take {+1 ongoing} to all rolls in direct pursuit of that goal. At the end of any scene in which you don’t make progress towards that goal, mark a {condition}. When you [fulfill your goal], mark {potential}."
											},

											notes: "For [Game face], whether or not you made progress towards your goal is ultimately down to the GM’s discretion."
									}									
								}
							},
							ru: {
								title: "Стремление",
								key: "game_face",
								data: {
									move: {
										data: {											
											condition: "Когда ты [обязуешься кого-то спасти или победить ужасного врага], отметьте {Состояние} и {получи +1} для всех бросков связанных с этим стремлением. В конце любой сцены, в которой ты не приблизилась к цели, отметьте {Состояние}. [Добившись цели], отметь {потенциал}."
											},

											notes: "For [Game face], whether or not you made progress towards your goal is ultimately down to the GM’s discretion."
									}																			
								}
							}
						},
						{
							en: {
								title: "I am what you see",
								key: "what_you_see:",
								data: {
									move: {
										data: {											
											condition: "When you [spend time talking to someone about your identity], you can ask them which {Label} they want to impose on you; their player will tell you honestly. If you [accept what they tell you], take {+1 forward} and either mark {potential} or clear a {condition}."
											},

											notes: "For [I am what you see], you can still <reject#player_moves|periphreal_moves|reject_influence> the {Label} they try to impose on you — and you’ll probably have to if you don’t accept it."
									}									
								}
							},
							ru: {
								title: "Я то, что ты видишь",
								key: "what_you_see",
								data: {
									move: {
										data: {											
											condition: "Когда ты [рассказываешь кому-то о своей настоящей личности], можешь спросить, какой {Ярлык} он хочет навязать тебе. Если [ты соглашаешься] с тем, что тебе говорят, получи {+1 к следующему} ходу и либо отметь {потенциал}, либо очистить {состояние}.",

											notes: "For [I am what you see], you can still <reject#player_moves|periphreal_moves|reject_influence> the {Label} they try to impose on you — and you’ll probably have to if you don’t accept it."
											},
									}																			
								}
							}
						},

						{
							en: {
								title: "Mild-mannered",
								key: "mild_mannered",
								data: {
									move: {
										data: {
											condition: "When you [try to use your civilian identity] to deceive, trick, or slip past someone, roll +%MUNDANE%.",
											parts: [
												{
													type: "hit",
													info: "On a hit they buy your facade.",
													parts: [													
														{
															type: "partial",
															info: "On a 7-9, choose one",
															list: [
																{
																	title: "you’re still under observation"
																},
																{
																	title: "you leave something incriminating behind"
																},
																{
																	title: "you’re forced to make a fool of yourself to sell it"
																},
															]																
														}
													],														
												},
												{
													type: "miss",
													info: "On a miss, one of your {civilian obligations} rears its ugly head."
												}
											],

											notes: "For [Mild-mannered], if they buy your facade you’re in no immediate danger of being found out. If you’re still {under observation}, it means that if you do anything too problematic, you’re likely to get into trouble — they’re watching you. If you {leave something incriminating}, it means that later you can expect someone to put two and two together and come to find you. If you have to {make a fool of yourself}, you can expect NPCs to use their {Influence} to affect how you see yourself — and probably inflict a {condition}."
											
										}
									}									
								}
							},
							ru: {
								title: "Хорошие манеры",
								key: "mild_mannered",
								data: {
									move: {
										data: {
											condition: "Когда ты [пытаешься использоват mcdj. гражданкую личность] ввести в заблуждение, обхитрить или проскользнуть мимо кого-то, брось +%MUNDANE%.",
											parts: [
												{
													type: "hit",
													info: "При успехе цель купилась.",
													parts: [													
														{
															type: "partial",
															info: "На 7-9 выбери 1:",
															list: [
																{
																	title: "ты все еще под наблюдением"
																},
																{
																	title: "ты оставляешь после себя что-то компрометирующее"
																},
																{
																	title: "ты вынужден выставить себя дураком для достижения цели"
																},
															]																
														}
													],														
												},
												{
													type: "miss",
													info: "При промахе одно из ваших {гражданских обязательств} поднимает свою уродливую голову."
												}
											],

											notes: "For [Mild-mannered], if they buy your facade you’re in no immediate danger of being found out. If you’re still {under observation}, it means that if you do anything too problematic, you’re likely to get into trouble — they’re watching you. If you {leave something incriminating}, it means that later you can expect someone to put two and two together and come to find you. If you have to {make a fool of yourself}, you can expect NPCs to use their {Influence} to affect how you see yourself — and probably inflict a {condition}."
											
										}
									}									
								}
							}																
						},

						{
							en: {
								title: "I’ll save you!",
								key: "save_you",
								data: {
									move: {
										data: {											
											condition: "You’re willing to pay high costs to keep your loved ones safe. [Reveal your secret identity] to someone watching or [mark a {condition}] to <defend#player_moves|basic_moves|defend> a loved one as if you rolled a 12+.",											

											notes: "[I’ll save you] is ultimately a move for making sure the people from your civilian life are safe at critical moments—though it may come at some cost to you."
										}
									}									
								}
							},
							ru: {
								title: "Я спасу тебя!",
								key: "save_you",
								data: {
									move: {
										data: {											
											condition: "Ты готов заплатить любую цену, чтобы твои близкие были в безопасности. [Открой тайную личность] тому кто рядом и видит это либо [отметь {Состояние}], чтобы <Защитить#player_moves|basic_moves|defend> любимого человека, как если бы получил 12+",											

											notes: "[I’ll save you] is ultimately a move for making sure the people from your civilian life are safe at critical moments—though it may come at some cost to you."
											}
										}
									}																		
								}
						},

						{
							en: {
								title: "Dangerous web:",
								key: "dangerous_web",
								data: {
									move: {
										data: {
											condition: "When you [reveal a trap] you’ve left for someone using your powers, roll +%your mask’s Label%.",
											parts: [
												{
													type: "hit",
													info: "On a hit, your opponent trips into it, and you get an {opening or opportunity} against them.",
													parts: [													
														{
															type: "great",
															info: "On a 10+, take {+1 forward} to pursuing it",																											
														}
													],														
												},
												{
													type: "miss",
													info: "On a miss, the trap inadvertently leads to a dangerous escalation"
												}
											],

											notes: "For [Dangerous web], you don’t actually have to have put the trap in earlier — when you trigger the move, it can be the first time that you’ve mentioned setting the trap. It has to fit the fiction — if there’s no way you possibly could have left a trap, then you can’t trigger the move."
											
										}
									}									
								}
							},
							ru: {
								title: "Опасная паутина",
								key: "dangerous_web",
								data: {
									move: {
										data: {
											condition: "Когда ты [раскрываешь расставленную тобой ловушку], которую ты создала используя свои силы, брось +%Ярлык своей маски%.",
											parts: [
												{
													type: "hit",
													info: "При успехе твой противник попал в нее и ты получаешь {возможность} против него.",
													parts: [													
														{
															type: "great",
															info: "На 10+, получи {+1 к следующему} на преследование цели",																											
														}
													],														
												},
												{
													type: "miss",
													info: "При провале ловушка внезапно приводит к опасной эскалации."
												}
											],

											notes: "For [Dangerous web], you don’t actually have to have put the trap in earlier — when you trigger the move, it can be the first time that you’ve mentioned setting the trap. It has to fit the fiction — if there’s no way you possibly could have left a trap, then you can’t trigger the move."
											
										}
									}									
								}
							}																
						},						

					]
				},

				{
					title: "Наследие",
					key: "legasy",
					color: "",
					ico: "",
					type: 1,				
					sub: [
						{
							en: {
								title: "Fight the good fight",
								key: "good_fight",
								data: {
									move: {
										data: {											
											condition: "When you [pull your punches while <directly engaging a threat#player_moves|basic_moves|directly_engage_threat>], you can roll +%SAVIOR% instead of +%DANGER%. If you do, you cannot choose {to impress, surprise, or frighten your foe}. ",	
										}
									}									
								}
							},
							ru: {
								title: "За правое дело",
								key: "good_fight",
								data: {
									move: {
										data: {											
											condition: "Когда ты [сдерживаешь свои удары, <выходя против явной угрозы#player_moves|basic_moves|directly_engage_threat>], ты можешь бросить +%SAVIOR% вместо +%DANGER%. Если ты это делаешь, ты не сможешь {произвести впечатление, удивить или напугать своего врага}.",		
											}
										}
									}																		
								}
						},

						{
							en: {
								title: "I know what I am",
								key: "i_know_what_i_am",
								data: {
									move: {
										data: {											
											condition: "Once per scene, when [you <defendl#player_moves|basic_moves|defend> a teammate] you can shift {Savior} up and another {Label} down in addition to any other benefits from the move, even on a miss. If you do, add {1 Team} to the pool.",	
										}
									}									
								}
							},
							ru: {
								title: "Я тот, кто я есть",
								key: "i_know_what_i_am",
								data: {
									move: {
										data: {											
											condition: "Один раз за сцену, [<защищая#player_moves|basic_moves|defend> кого-то из команды] ты можешь сдвинуть {Savior} вверх и любой другой {Ярлык} вниз. Если ты сделаешь это, добавь {1 в тимпул}.",		
											}
										}
									}																		
								}
						},

						{
							en: {
								title: "Words of the past",
								key: "words_of_past",
								data: {
									move: {
										data: {											
											condition: "When you [seek the guidance of one of your elders or a member of your legacy], tell them a problem you face, and ask them a question about the problem. They will answer it honestly, and tell you what to do. Take {+1 ongoing} if you listen. If you go your own way, {mark potential}.",	

											notes: "[Words of the past] lets you ask members of your legacy for input on a problem. <The legacy matters#player_moves|legasy|legacy_matters> is about taking and giving {Influence} to members of your legacy, and allowing yourself to be shaped by their words and opinions. Both are great moves to push you toward interacting with your legacy on a regular basis."
										}
									}									
								}
							},
							ru: {
								title: "Слова из прошлого",
								key: "words_of_past",
								data: {
									move: {
										data: {											
											condition: "Когда [ищешь совета кого-то из своих старших или членов наследия], сообщи ему о проблеме, с которой столкнулся, и задай вопрос. Он ответит честно и подскажет тебе, что делать. Если ты прибегнешь к совету, {получи +1} к любым действиям с ним связанным. Если ты сделаешь все по-своему, отметь {Потенциал}.",	

											notes: "[Words of the past] lets you ask members of your legacy for input on a problem. <The legacy matters#player_moves|legasy|legacy_matters> is about taking and giving {Influence} to members of your legacy, and allowing yourself to be shaped by their words and opinions. Both are great moves to push you toward interacting with your legacy on a regular basis."	
											}
										}
									}																		
								}
						},

						{
							en: {
								title: "The legacy matters",
								key: "legacy_matters",
								data: {
									move: {
										data: {											
											condition: "When you [take {Influence} over someone from your legacy (or give them {Influence} over you)], mark {potential} and take {+1 forward}.||When [someone from your legacy causes your {Labels} to shift], mark {potential} and take {+1 forward}.",	

											notes: "<Words of the past#player_moves|legasy|words_of_past> lets you ask members of your legacy for input on a problem. [The legacy matters] is about taking and giving {Influence} to members of your legacy, and allowing yourself to be shaped by their words and opinions. Both are great moves to push you toward interacting with your legacy on a regular basis."
										}
									}									
								}
							},
							ru: {
								title: "Семейное дело",
								key: "legacy_matters",
								data: {
									move: {
										data: {											
											condition: "[Оказывая {Влияние} на кого-то из своего наследия (или когда они {Влияют} на тебя)], отметь {Потенциал} и получи {+1 к следующему}.||Когда [кто-то из наследия заставляет твои {Ярлыки} двигаться], отметь {Потенциал} и получи {+1 к следующему}.",	

											notes: "<Words of the past#player_moves|legasy|words_of_past> lets you ask members of your legacy for input on a problem. [The legacy matters] is about taking and giving {Influence} to members of your legacy, and allowing yourself to be shaped by their words and opinions. Both are great moves to push you toward interacting with your legacy on a regular basis."	
										}
									}
								}																		
							}
						},

						{
							en: {
								title: "Never give up, never surrender",
								key: "never_give_up",
								data: {
									move: {
										data: {											
											condition: "When you [<take a powerful blow#player_moves|basic_moves|powerful_blow> from someone with far greater power than you], use this move instead of the basic move. Roll +%SAVIOR%.",	
											replace: "<take a powerful blow#player_moves|basic_moves|powerful_blow>",
											parts: [
												{
													type: "hit",
													info: "On a hit, you stand strong and choose one:",
													params: {
														list_first: true
													},
													parts: [													
														{
															type: "partial",
															info: "On a 7-9, mark a {condition}.",
																	
														},
													],
													list: [
														{
															title: "you get an {opportunity or opening} against your attacker"
														},
														{
															title: "you rally from the hit, and it inspires the team; add {1 Team} to the pool"
														},
														{
															title: "you keep your attacker’s attention"
														},
													]						
												},
												{
													type: "miss",
													info: "On a miss, you go down hard but leave your opponent {off balance and vulnerable}.",															
												},
											],

											notes: "[Never give up, never surrender] only triggers when you get hit by someone {far stronger than you}. Choosing {“}You get an opportunity or opening against your attacker} means the GM tells you what {opportunity or opening} you receive, suited to the situation. Choosing {to keep your attacker’s attention} ensures they won’t stop trying to attack you afer they notice how hardy you are — you can continue defending others by sacrificing yourself."
										}
									}									
								}
							},
							ru: {
								title: "Никогда не сдавайся",
								key: "never_give_up",
								data: {
									move: {
										data: {											
											condition: "[<Получив мощный удар#player_moves|basic_moves|powerful_blow> от кого-то гораздо более сильного, чем ты], используй этот ход, вместо базового. Брось +%SAVIOR%.",	

											replace: "<Получи мощный удар#player_moves|basic_moves|powerful_blow>",

											parts: [
												{
													type: "hit",
													info: "При успехе ты держишься и выбираешь 1:",
													params: {
														list_first: true
													},
													parts: [													
														{
															type: "partial",
															info: "На 7-9 отметь {Состояние}",
																	
														},
													],
													list: [
														{
															title: "ты получаешь {возможность} против атакующего"
														},
														{
															title: "твоя стойкость вдохновляет команду, добавь {1 в тимпул}"
														},
														{
															title: "ты удерживаешь внимание врага"
														},
													]						
												},
												{
													type: "miss",
													info: "При провале ты повержен, но и твой противник {выбит из равновесия и уязвим}.",															
												},
											],

											notes: "[Never give up, never surrender] only triggers when you get hit by someone {far stronger than you}. Choosing {“}You get an opportunity or opening against your attacker} means the GM tells you what {opportunity or opening} you receive, suited to the situation. Choosing {to keep your attacker’s attention} ensures they won’t stop trying to attack you afer they notice how hardy you are — you can continue defending others by sacrificing yourself."
										}
									}
								}																		
							}
						},

						{
							en: {
								title: "Symbol of authority",
								key: "symbol_of_authority",
								data: {
									move: {
										data: {											
											condition: "When you [give an NPC an order based on authority they recognize], roll +%SAVIOR%.",	
											parts: [
												{
													type: "hit",
													info: "On a hit, they choose one:",
													params: {
														list_first: true
													},
													parts: [													
														{
															type: "great",
															info: "On a 10+, you also take {+1 forward} against them.",
																	
														},
													],
													list: [
														{
															title: "do what you say"
														},
														{
															title: "get out of your way"
														},
														{
															title: "attack you at a disadvantage"
														},
														{
															title: "freeze"
														},
													]						
												},
												{
													type: "miss",
													info: "On a miss, they do as they please and you take {-1 forward} against them.",															
												},
											],

											notes: "[Symbol of authority] should be aimed pretty specifically when you trigger it. You should be clear about the {specific person or group of people} you’re using it on — and the GM has final say over whether it makes sense that you’re using the move on a larger group. Generally speaking, you can only use [Symbol oа authority] on a group that’s {unified and not differentiated} from each other. ||The move only triggers when the person you command actually {recognizes and understands your authority}. If you tell a group of unintelligent robots — or 	aliens who’ve never heard oа your legacy — that they must stop what they’re doing, the move won’t trigger. It still triggers {on enemies} who know of you, but hate your legacy — they recognize your authority, even if they loathe it and choose to ignore it as much as possible. || You also might give them an order that lines up with one of the options on the list — for instance, ordering them to get out of your way. That’s fine, and it still comes down to the GM’s choice to say exactly which option they choose."
										}
									}									
								}
							},
							ru: {
								title: "Символ власти",
								key: "symbol_of_authority",
								data: {
									move: {
										data: {											
											condition: "Когда ты [даешь NPC приказ, основанный на признаваемом ими авторитете], брось +%SAVIOR%.",	
											parts: [
												{
													type: "hit",
													info: "При успехе цель выбирает 1:",
													params: {
														list_first: true
													},
													parts: [													
														{
															type: "great",
															info: "На 10+ ты также получаешь {+1 к следующему} против них.",
																	
														},
													],
													list: [
														{
															title: "сделать то, что ты сказал"
														},
														{
															title: "убраться с пути"
														},
														{
															title: "атаковать тебя из невыгодной позиции"
														},
														{
															title: "замереть"
														},
													]						
												},
												{
													type: "miss",
													info: "При провале они делают что захотят и ты получаешь {-1 к следующему}.",															
												},
											],

											notes: "[Symbol of authority] should be aimed pretty specifically when you trigger it. You should be clear about the {specific person or group of people} you’re using it on — and the GM has final say over whether it makes sense that you’re using the move on a larger group. Generally speaking, you can only use [Symbol oа authority] on a group that’s {unified and not differentiated} from each other. ||The move only triggers when the person you command actually {recognizes and understands your authority}. If you tell a group of unintelligent robots — or 	aliens who’ve never heard oа your legacy — that they must stop what they’re doing, the move won’t trigger. It still triggers {on enemies} who know of you, but hate your legacy — they recognize your authority, even if they loathe it and choose to ignore it as much as possible. || You also might give them an order that lines up with one of the options on the list — for instance, ordering them to get out of your way. That’s fine, and it still comes down to the GM’s choice to say exactly which option they choose."
										}
									}									
								}																		
							}
						},

					]
				},

				{
					title: "Нова",
					key: "nova",
					color: "",
					ico: "",
					type: 1,				
					sub: [
						{
							en: {
								title: "Burn",
								key: "burn",
								data: {
									move: {
										data: {
											condition: "When you [charge up your powers], roll +%conditions% you currently have marked.",
											info: "Spend your {burn} on your {flares}. You lose all {burn} at the end of the scene.",

											parts: [
												{
													type: "hit",
													info: "On a hit, hold 3 {burn}",
													parts: [
														{
															type: "partial",
															info: "On a 7-9, mark a {condition}",
																	
														},
													]
												},
												{
													type: "miss",
													info: "On a miss, hold 2 {burn} and mark three {conditions}."
												},
												{
													list: [
														"[Reality storm]: You channel a destructive burst with your powers. Spend {1 burn} to <directly engage a threat#player_moves|basic_moves|directly_engage_threat> using your powers, rolling +%FREAK% instead of +%DANGER%. If you do, you will cause {unwanted collateral damage} unless you spend another {burn}.",
														"[Shielding]: You call up a {fast protective field} to stop a danger. Spend {1 burn} to <defend#player_moves|basic_moves|defend> someone else from an immediate threat, rolling +%FREAK% instead of +%SAVIOR%.",
														"[Constructs]: Spend {1 burn} to {create any object with your powers}, up to the size of a person. Spend an additional {burn} to animate it independently of yourself. The construct dissolves at the end of the scene.",
														"[Moat]: Spend {1 burn} to {create a barrier} that will hold back threats as long as you keep your attention on it. The GM may call for you to spend another {burn} if the barrier is threatened by particularly powerful enemies.",
														"[Worship]: You {put out a tremendous display} of your might. Spend {1 burn} to awe an audience into silence, respect, and attention when you <unleash your powers#player_moves|basic_moves|unleash_your_power>.",
														"[Move]: Spend {1 burn} to {move to any place you choose within the scene}, breaking through or slipping past any barriers or restraints in your way. Spend a second {burn} to move to any place you’ve previously been.",
														"[Boost]: Spend {1 burn} to {supercharge a teammate’s efforts with your powers}, giving them a {+1 bonus} to their roll as if you had spent {Team} from the pool.",
														"[Overcharge]: You channel the full capacity of your incredible powers to {overcome an obstacle}, {reshape your environment}, or {extend your senses}. Spend {2 burn} to take a 10+ when you <unleash your powers#player_moves|basic_moves|unleash_your_power>.",
														"[Elemental awareness]: Spend {1 burn} and mark a {condition} to {open your mind up to the world around you} with your powers. You can ask any one question about the world around you, and the GM will answer honestly.",
														"[Snatch]: Spend {1 burn} to use your powers to {seize any one object} up to the size of a person from someone within view.",
													]
												}
											],

											notes: [
												"When you charge up your powers, the burn you generate lasts until the end of the scene. To charge up your powers, tell the GM what you’re {actually doing}, what that {looks like} for you. If, through charging up your powers, you wind up marking {one condition too many}, that still takes you {out of the scene}, just like normal. When you roll {+ conditions marked}, add the total number of {conditions} you currently have marked to your roll — but keep in mind your bonus can’t go higher than +4.",
												"For [Reality storm], if you cause {unwanted collateral damage}, the GM tells you what it is — and you can expect not to like it.",
												"For [Constructs], when you animate a construct {independent of yourself}, you can give it orders and have it take actions. It will obey you. For the most part, the GM tells you the results of anything it does, but the GM might have you make a move through your construct, if appropriate.",
												"[Shielding] allows you to protect someone in the moment, rolling +%FREAK% to defend. It’s {transient and immediate}.",
												"[Moat] allows you to set up a {lasting defense} in advance, but it won’t necessarily help you right in the moment when your friend is in danger. Moat lasts as long as you focus on it and spend more {burn} when it gets hit especially hard.",
												"[Worship] allows you to awe an audience in addition to whatever else you do when you unleash. You can <unleash your powers#player_moves|basic_moves|unleash_your_power> specififically to put on the display if you so choose.",
												"[Move] can refer to teleportation, barreling hard in one direction, or anything else that fifits your powers.",
												"[Elemental awareness] lets you ask the GM any question you want, but it has to be about the place you’re currently in, or elements in the area around you.",											
											]
										}
									}
								}
							},
							ru: {
								title: "Воспылай",
								key: "burn",
								data: {
									move: {
										data: {
											condition: "Когда ты [заряжаешь свои силы], брось +%Состояния%, которые у тебя отмечены.",
											info: "Трать полученное {Пламя} на твои {Вспышки}. Ты теряешь весь запас {Пламени} в конце сцены.",

											parts: [
												{
													type: "hit",
													info: "При успехе получи 3 {Пламени}",
													parts: [
														{
															type: "partial",
															info: "На 7-9 отметь {Состояние}",
																	
														},
													]
												},
												{
													type: "miss",
													info: "При провале получи 2 {Пламени} и отметь три {Состояния}."
												},
												{
													info: "Выбери 4 {Вспышки}:",
													list: [
														"[Сверхшторм]: Ты используешь разрушающий элемент своих сил. Потрать {1 Пламя}, <выходя против явной угрозы#player_moves|basic_moves|unleash_your_power>, чтобы бросить +%FREAK% вместо +%DANGER%. Если ты делаешь это, твои силы причинять {нежелательный побочный ущерб}, если не потратить еще {1 Пламя}.",
														"[Заслон]: Ты создаешь защитное поле, чтобы остановить опасность. Потрать {1 Пламя}, чтобы <защитить#player_moves|basic_moves|defend> кого-то от сиюминтутной угрозы, чтобы бросить +%FREAK% вместо +%SAVIOR%.",
														"[Конструкт]: Потрать {1 Пламя}, чтобы с помощью своих сил создать объект размером не превышающим человека. Потрать дополнительно {1 Пламя}, чтобы оживить его. Конструк развоплотится в конце сцены.",
														"[Барьер]: Потрать {1 Пламя}, чтобы создать барьер, который будет сдерживать угрозы до тех пор, пока ты концентрируешься на нём. ГМ может потребовать, чтобы ты потратил еще {1 Пламя}, если барьеру причинен особенно сильный вред.",
														"[Богоподобный]: Ты являешь невероятную демонстрацию своих возможностей. Потрать 1 Пламя, чтобы присутсвующие застыли в немом благоговении, когда ты <даешь волю силам#player_moves|basic_moves|unleash_your_power>",
														"[Сверхшаг]: Потрать {1 Пламя}, чтобы переместиться в любое место по своему выбору внутри сцены, прорвавшись или проскользнув мимо любых препятствий или ограничений. Потрать 2 {Пламени}, чтобы переместиться в любое место, в котором ты ранее бывал.",
														"[Усиление]: Потрать 1 {Пламя}, чтобы усилить своими силами действия товарища по команде, дав ему бонус {+1 к броску}, как если бы ты потратил очко из {тимпула}.",
														"[Передоз]: Ты запускаешь свои невероятные способности на полную мощность, чтобы {преодолеть препятствие}, {изменить окружение} или {расширить свои чувства}. Потрать 2 {Пламени}, чтобы получить 10+, когда <даешь волю силам#player_moves|basic_moves|unleash_your_power>.",
														"[Сверхзнание]: Потрать 1 {Пламя} и отметь {Состояние}, чтобы с помощью своих сил открыть свой разум миру вокруг. Ты можешь задать любой вопрос о мире вокруг себя, и ГМ ответит честно.",
														"[Стащить]: Потрать 1 {Пламя}, чтобы с помощью своих сил стащить один предмет размером до человека у кого-то в пределах видимости.",
													]
												}
											],

											notes: [
												"When you charge up your powers, the burn you generate lasts until the end of the scene. To charge up your powers, tell the GM what you’re {actually doing}, what that {looks like} for you. If, through charging up your powers, you wind up marking {one condition too many}, that still takes you {out of the scene}, just like normal. When you roll {+ conditions marked}, add the total number of {conditions} you currently have marked to your roll — but keep in mind your bonus can’t go higher than +4.",
												"For [Reality storm], if you cause {unwanted collateral damage}, the GM tells you what it is — and you can expect not to like it.",
												"For [Constructs], when you animate a construct {independent of yourself}, you can give it orders and have it take actions. It will obey you. For the most part, the GM tells you the results of anything it does, but the GM might have you make a move through your construct, if appropriate.",
												"[Shielding] allows you to protect someone in the moment, rolling +%FREAK% to defend. It’s {transient and immediate}.",
												"[Moat] allows you to set up a {lasting defense} in advance, but it won’t necessarily help you right in the moment when your friend is in danger. Moat lasts as long as you focus on it and spend more {burn} when it gets hit especially hard.",
												"[Worship] allows you to awe an audience in addition to whatever else you do when you unleash. You can <unleash your powers#player_moves|basic_moves|unleash_your_power> specififically to put on the display if you so choose.",
												"[Move] can refer to teleportation, barreling hard in one direction, or anything else that fifits your powers.",
												"[Elemental awareness] lets you ask the GM any question you want, but it has to be about the place you’re currently in, or elements in the area around you.",											
											]
										}
									}
								}
							}
						}
					]
				},
								
			]
		},
		
		{
			title: "Заклинания",
			key: "spells",
			color: "",
			ico: "",

			sub: [
				{
					title: "Волшебник",
					key: "wisard",
					color: "",
					ico: "",
					group: {
						by: "level",
						rules: {
							0: "Фокусы",
							1: "Уровень 1",
							3: "Уровень 3",
							5: "Уровень 5",
							7: "Уровень 7",
							9: "Уровень 9"
						}
					},
			
					sub: [
						{
							title: "Свет",
							key: "Light",
							data: {
								item: {
									data: {
										title: "Свет",
										level: 0,
										tags: [
										],
										description: "Предмет, которого вы коснулись, начинает излучать волшебный свет, по яркости равный свету факела. От пламени не исходит тепла, оно «горит» беззвучно и не расходует топливо, однако в остальном всё в точности как у обычного факела. Цвет свечения может быть любым на ваш выбор. Заклинание действует, пока вы рядом с предметом."
									}
								}
							}
						},
						{
							title: "Незримый слуга",
							key: "Unseen_Servant",
							data: {
								item: {
									data: {
										title: "Свет",
										level: 0,
										tags: [
											"длительное"
										],
										description: "Вы создаёте невидимый волшебный механизм, который не умеет ничего, кроме как переносить предметы. Его нагрузка равна 3, и он несёт всё, что вы ему дали. Он не может поднимать предметы сам, может только переносить то, что вы ему дали. Предметы, которые несёт незримый слуга, со стороны выглядят как плывущие по воздуху в нескольких шагах от вас. Если незримый слуга получает хоть сколько-нибудь урона или оказывается слишком далеко от вас, то он немедленно исчезает, роняя все предметы, которые несёт. Иначе незримый слуга существует до тех пор, пока вы не прекратите поддерживать заклинание."
									}
								}
							}
						},
						{
							title: "Представление",
							key: "Prestidigitation",
							data: {
								item: {
									data: {
										title: "Свет",
										level: 0,
										tags: [
										],
										description: "Вы показываете небольшие фокусы, жалкое подобие заклинаний. Если при чтении вы касаетесь предмета, вы можете слегка изменить его вид: сделать чистым или грязным, охладить или нагреть, изменить вкус, запах или цвет. Если вы читаете заклинание, не касаясь предмета, то можете создавать небольшие иллюзии — не больше себя самого. Эти иллюзии довольно топорные и никого не одурачат, только развлекут."
									}
								}
							}
						},
						{
							title: "Разговор с духами",
							key: "Contact_Spirits",
							data: {
								item: {
									data: {
										title: "Разговор с духами",
										level: 1,
										tags: [
											"призыв"
										],
										description: "Назовите духа, с которым хотите поговорить (или оставьте это на долю ведущего). Вы призываете его с родного плана, достаточно близко к вам, чтобы поговорить. Дух обязан ответить на один вопрос, который вы зададите, в меру своих способностей."
									}
								}
							}
						},
						{
							title: "Обнаружить магию",
							key: "Detect_Magic",
							data: {
								item: {
									data: {
										title: "Обнаружить магию",
										level: 1,
										tags: [
											"прорицание"
										],
										description: "Одно из ваших чувств на короткое время получает возможность ощущать магию. Ведущий скажет, что волшебного находится неподалёку."
									}
								}
							}
						},
						{
							title: "Волшебная стрела",
							key: "Magic_Missile",
							data: {
								item: {
									data: {
										title: "Волшебная стрела",
										level: 1,
										tags: [
											"воплощение"
										],
										description: "С ваших пальцев срываются заряды чистой энергии волшебства. Вы наносите 2к4 урона одной цели."
									}
								}
							}
						},
						{
							title: "Очаровать персону",
							key: "Charm_Person",
							data: {
								item: {
									data: {
										title: "Очаровать персону",
										level: 1,
										tags: [
											"зачарование",
											"длительное"
										],
										description: "Человек (в широком смысле этого слова, не зверь и не монстр), которого вы коснулись, читая заклинание, считает вас лучшим другом, пока не получит урон или вы своими действиями не убедите его в обратном."
									}
								}
							}
						},
						{
							title: "Невидимость",
							key: "Invisibility",
							data: {
								item: {
									data: {
										title: "Невидимость",
										level: 1,
										tags: [
											"иллюзии",
											"длительное"
										],
										description: "Коснитесь союзника, и он станет невидимкой для всех. Заклинание действует, пока вы его не развеете или пока цель не атакует кого-то. До этого момента вы не можете творить заклинания вообще."
									}
								}
							}
						},
						{
							title: "Телепатия",
							key: "Telepathy",
							data: {
								item: {
									data: {
										title: "Телепатия",
										level: 1,
										tags: [
											"прорицание",
											"длительное"
										],
										description: "Вы можете создать телепатическую связь с другим человеком, коснувшись его; это позволит вам разговорить с ним мысленно. В один момент времени вы можете поддерживать телепатическую связь только с одним человеком."
									}
								}
							}
						},
						{
							title: "Тревога",
							key: "Alarm",
							data: {
								item: {
									data: {
										title: "Тревога",
										level: 1,
										tags: [
											
										],
										description: "Читая заклинание, обойдите по периметру участок земли. Когда любое существо войдёт внутрь очерченного круга, заклинание даст вам об этом знать; даже если вы спите, оно вас разбудит. Тревога будут действовать, пока вы вновь не возьмётесь подготавливать заклинания."
									}
								}
							}
						},
						{
							title: "Развеять магию",
							key: "Dispel_Magic",
							data: {
								item: {
									data: {
										title: "Развеять магию",
										level: 3,
										tags: [
										],
										description: "Это заклинание атакует другое, действующее рядом с вами заклинание или волшебный эффект из иного источника. Слабые заклинания заканчиваются, сильная магия слабеет или прекращается, пока вы рядом."
									}
								}
							}
						},
						{
							title: "Видеть сквозь время",
							key: "Visions_Through_Time",
							data: {
								item: {
									data: {
										title: "Видеть сквозь время",
										level: 3,
										tags: [
											"прорицание"
										],
										description: "Прочитав заклинание, загляните в чашу с водой, зеркало или другую отражающую поверхность. Ведущий опишет видение: мрачное событие, которое непременно произойдёт, если вы не вмешаетесь. Увиденное должно содержать подсказку, как избежать подобного развития событий. Уж извините, но знамения, что все будут жить долго и счастливо и умрут в один день, бывают редко."
									}
								}
							}
						},
						{
							title: "Огненный шар",
							key: "Fireball",
							data: {
								item: {
									data: {
										title: "Огненный шар",
										level: 3,
										tags: [
											"воплощение"
										],
										description: "Вы создаёте могучий шар пламени, который поражает вашу цель и всех, кто находится рядом: он наносит 2к6 игнорирующего броню урона."
									}
								}
							}
						},
						{
							title: "Двойник",
							key: "Mimic",
							data: {
								item: {
									data: {
										title: "Двойник",
										level: 3,
										tags: [
											"длительное"
										],
										description: "Читая это заклинание, коснитесь другого существа: вы принимаете его облик. Ваши физические характеристики копируюи его, но память и манера поведения остаются. Вы возвращаетесь в свой обычный облик, когда получаете урон или когда сами прекращаете поддерживать это заклинание. Пока это заклинание действует, вы не можете использовать классовые ходы мага."
									}
								}
							}
						},
						{
							title: "Зеркальное отражение",
							key: "Mirror_Image",
							data: {
								item: {
									data: {
										title: "Зеркальное отражение",
										level: 3,
										tags: [
											"иллюзии"
										],
										description: "Вы создаёте иллюзорный образ себя самого. Если вас атакуют, бросьте 1к6. Если выпадает 4, 5 или 6, удар приходится на иллюзию, которая тут же рассеивается, и действие заклинания заканчивается."
									}
								}
							}
						},
						{
							title: "Сон",
							key: "Sleep",
							data: {
								item: {
									data: {
										title: "Сон",
										level: 3,
										tags: [
											"зачарование"
										],
										description: "После прочтения этого заклинания, 1к4 видимых вам противника засыпают. Ведущий скажем, кто именно. Сон действует лишь на существ, способных заснуть. Просыпаются они от того же, что и обычные спящие: громких звуков, прикосновений, боли."
									}
								}
							}
						},
						{
							title: "Клетка",
							key: "Cage",
							data: {
								item: {
									data: {
										title: "Клетка",
										level: 5,
										tags: [
											"воплощение",
											"длительное"
										],
										description: "Вы заключаете цель в клетку из магической энергии. Ни одно существо не может ни попасть в клетку, ни выйти из неё. Клетка существует, пока вы не прочитаете другое заклинание или не развеете это. Пока заклинание действует, вы должны всегда держать клетку в поле зрения, а заключённое в ней существо слышит ваши мысли."
									}
								}
							}
						},
						{
							title: "Планарная связь",
							key: "Contact_Other_Plane",
							data: {
								item: {
									data: {
										title: "Планарная связь",
										level: 5,
										tags: [
											"прорицание"
										],
										description: "Вы задаёте вопрос существу с другого плана. Вы должны уточнить, какому именно — назвать план, вид существа, или его имя. Вы создаёте двусторонний канал связи с существом; он моет быть оборван в любой момент времени по вашему желанию или желанию существа."
									}
								}
							}
						},
						{
							title: "Превращение",
							key: "Polymorph",
							data: {
								item: {
									data: {
										title: "Превращение",
										level: 5,
										tags: [
											"зачарование"
										],
										description: "Касаясь существа, вы полностью меняете его облик на тот, который представите. Облик сохраняется, пока вы не прочитаете какое-нибудь заклинание. Опишите облик, включая любые изменения характеристик, преимущества и слабости, обусловленные физическим строением. Ведущий назовёт одно или несколько последствий из списка ниже: |◆ Новый облик будет нестабильным и не сохранится надолго |◆ Перемена затронет также и разум существа |◆ У облика есть неожиданные преимущества и/или слабости"
									}
								}
							}
						},
						{
							title: "Призвать монстра",
							key: "Summon_Monster",
							data: {
								item: {
									data: {
										title: "Призвать монстра",
										level: 5,
										tags: [
											"призыв",
											"длительное"
										],
										description: "Вы призываете монстра, который помогает вам, чем может. Управляйте им, как своим персонажем. Ему доступны лишь основные ходы, его ОЗ равны 1, модификаторы характеристик — +1, и он использует ваш базовый урон. Он также обладает 1к6 особенностями на ваш выбор:|◆ модификатор одной из характеристик монстра равен +2, а не +1;|◆ ему не свойственно безрассудство;|◆ он наносит 1к8 урона;|◆ у него крепкая связь со своим планом: +2 к ОЗ за каждый ваш уровень;|◆ у него есть какое-то физическое преимущество.|В зависимости вашего выбора, ведущий скажет, что вы вызвали. Существо остаётся в плане вашей реальности, пока не умрёт или вы не изгоните его. Пока заклинание активно, вы получаете -1 на все заклинания."
									}
								}
							}
						},
						{
							title: "На всякий случай",
							key: "Contingency",
							data: {
								item: {
									data: {
										title: "На всякий случай",
										level: 7,
										tags: [
											"воплощение"
										],
										description: "Выберите заклинание 5-го уровня или ниже, и опишите условия, использовав не больше слов, чем ваш уровень. Заклинание сработает, когда эти условия возникнут или когда вы захотите — что случиться первым. Бросок чтения делать не нужно. У вас может быть только одно приготовленное так заклинание; если вы приготовите другое, новое заменит старое."
									}
								}
							}
						},
						{
							title: "Истинное зрение",
							key: "True_Seeing",
							data: {
								item: {
									data: {
										title: "Истинное зрение",
										level: 7,
										tags: [
											"прорицание",
											"длительное"
										],
										description: "Вы видите истинный облик вещей. Заклинание действует, пока вы не развеете его или не солжёте. Пока оно в силе, вы получаете -1 на все броски заклинаний."
									}
								}
							}
						},
						{
							title: "Путь сквозь тени",
							key: "Shadow_Walk",
							data: {
								item: {
									data: {
										title: "Путь сквозь тени",
										level: 7,
										tags: [
											"иллюзии"
										],
										description: "Вы превращаете тень в портал. Опишите место, использовав не больше слов, чем ваш уровень. После этого вы и любой союзник, присутствовавший при чтении, шагнув в портал, оказывается в описанном месте. Каждый союзник может использовать портал лишь однажды."
									}
								}
							}
						},
						{
							title: "Облако-убийца",
							key: "Cloudkill",
							data: {
								item: {
									data: {
										title: "Облако-убийца",
										level: 7,
										tags: [
											"призыв",
											"длительное"
										],
										description: "Из-за Чёрных Врат Смерти вы призываете облако тумана, которое заполняет окружающее пространство. Любое существо, получившее урон в этой зоне, прибавляет к нему ещё 1к6 (сквозь броню). Туман висит, пока вы видите затронутую им область, или пока вы его не развеете."
									}
								}
							}
						},
						{
							title: "Подчинение",
							key: "Dominate",
							data: {
								item: {
									data: {
										title: "Подчинение",
										level: 7,
										tags: [
											"зачарование",
											"длительное"
										],
										description: "Вы подчиняете разум другого касанием. Вы получаете запас 1к4 и можете потратить его один к одному, чтобы заставить цель (одно на выбор):|◆ произнести несколько слов на ваш выбор;|◆ отдать вам что-то, что она держат;|◆ атаковать указанную вами цель определённым способом;|◆ правдиво ответить на один вопрос.|Если цель получает урон, вы теряете 1 запас. Когда он иссякнет, заклинание закончится. Пока заклинание в силе, вы не можете читать другие."
									}
								}
							}
						},
						{
							title: "Предупреждение",
							key: "Alert",
							data: {
								item: {
									data: {
										title: "Предупреждение",
										level: 9,
										tags: [
											"прорицание"
										],
										description: "Опишите событие. Если оно произойдёт, то ведущий скажем вам об этом, как бы далеко от эпицентра события вы не находились. По желанию вы можете видеть происходящее, будто присутствуете лично. Только одно предупреждение может быть активно в один момент времени."
									}
								}
							}
						},
						{
							title: "Тюрьма души",
							key: "Soul_Gem",
							data: {
								item: {
									data: {
										title: "Тюрьма души",
										level: 9,
										tags: [
										],
										description: "Вы заключаете душу умирающего существа в самоцвет. Существо осознаёт, что заперто, но на него всё ещё можно влиять с помощью магии, переговоров и подобного. Все броски ходов против пойманного существа получают бонус +1. Вы можете освободить душу в любой момент, однако вновь запечатать в камень когда-то освобожденную душу нельзя."
									}
								}
							}
						},
						{
							title: "Убежище",
							key: "Shelter",
							data: {
								item: {
									data: {
										title: "Убежище",
										level: 9,
										tags: [
											"воплощение",
											"длительное"
										],
										description: "Вы создаёте здание из чистой магии. Это может быть как дворец, так и шалаш. В любом случае оно непроницаемо для немагического урона. Строение существует, пока вы не покинете его или не рассеете заклинание."
									}
								}
							}
						},
						{
							title: "Идеальный призыв",
							key: "Perfect_Summons",
							data: {
								item: {
									data: {
										title: "Идеальный призыв",
										level: 9,
										tags: [
											"призыв"
										],
										description: "Рядом с вами появляется существо. Назовите, какое именно существо, или кратко опишите его тип. Перед вами появится названное существо или существо названного типа соответственно."
									}
								}
							}
						},
						{
							title: "Антипатия",
							key: "Antipathy",
							data: {
								item: {
									data: {
										title: "Антипатия",
										level: 9,
										tags: [
											"зачарование"
										],
										description: "Назовите цель заклинания, а также тип существа или одно мировоззрение. Оказавшись в поле зрения цели, существа указанного вида или мировоззрения немедленно убегают. Это продолжается, пока вы находитесь рядом с целью или пока не развеете заклинание. Пока заклинание действует, вы получаете -1 на все броски заклинаний."
									}
								}
							}
						}
						
					]
					
				},
				{
					title: "Жрец",
					key: "cleric",
					color: "",
					ico: "",
					group: {
						by: "level",
						rules: {
							0: "Псалмы",
							1: "Уровень 1",
							3: "Уровень 3",
							5: "Уровень 5",
							7: "Уровень 7",
							9: "Уровень 9"
						}
					},
			
					sub: [
						{
							title: "Свет",
							key: "Light",
							data: {
								item: {
									data: {
										title: "Свет",
										level: 0,
										tags: [
										],
										description: "Предмет, которого вы коснулись, начинает излучать волшебный свет, по яркости равный свету факела. От пламени не исходит тепла, оно «горит» беззвучно и не расходует топливо, однако в остальном всё в точности как у обычного факела. Цвет свечения может быть любым на ваш выбор. Заклинание действует, пока вы рядом с предметом."
									}
								}
							}
						},
						{
							title: "Освящение",
							key: "Sanctify",
							data: {
								item: {
									data: {
										title: "Освящение",
										level: 0,
										tags: [
										],
										description: "Еда или напиток, который вы держите в руках, творя это заклинание, с этого момента посвящены божеству. Эти еда и напиток становятся святыми (или проклятыми), и вдобавок очищаются от любой мирской порчи."
									}
								}
							}
						},
						{
							title: "Указание свыше",
							key: "Guidance",
							data: {
								item: {
									data: {
										title: "Указание свыше",
										level: 0,
										tags: [
										],
										description: "Перед вами на краткое время появляется символ вашего божества и указывает направление либо дальнейшие действия, угодные божеству. Сообщение ограничивается лишь молчаливым указанием; полноценно пообщаться с божеством не выйдет."
									}
								}
							}
						},
						{
							title: "Благословение",
							key: "Bless",
							data: {
								item: {
									data: {
										title: "Благословение",
										level: 1,
										tags: [
											"длительное"
										],
										description: "Ваше божество ниспосылает удачу бойцу, которого вы выберете целью заклинания. Он получает +1 на все броски, пока сражается. Вы получаете -1 на всё время действия заклинания."
									}
								}
							}
						},
						{
							title: "Исцелить лёгкие раны",
							key: "Cure_Light_Wounds",
							data: {
								item: {
									data: {
										title: "Исцелить лёгкие раны",
										level: 1,
										tags: [
										],
										description: "Ваше прикосновение заставляет раны подсохнуть и облегчает боль в сломанных костях. Вы исцеляете 1к8 урона союзнику, которого коснулись."
									}
								}
							}
						},
						{
							title: "Обнаружить мировоззрение",
							key: "Detect_Alignment",
							data: {
								item: {
									data: {
										title: "Обнаружить мировоззрение",
										level: 1,
										tags: [
										],
										description: "Когда вы творите заклинание, выберите мировоззрение: Доброе, Злое, Законное или Хаотичное. На короткое время вы получаете способность чувствовать это мировоззрение: видеть ауру, ощущать характерный запах, чувствовать тепло или холод и т.п. Ведущий укажет, что именно."
									}
								}
							}
						},
						{
							title: "Вселить ужас",
							key: "Cause_Fear",
							data: {
								item: {
									data: {
										title: "Вселить ужас",
										level: 1,
										tags: [
										],
										description: "Выберите цель, которая находится в поле вашего зрения, и какой-нибудь предмет рядом. Пока вы удерживаете заклинание, цель боится этого объекта. Как именно этот страх будет проявляться, зависит от цели: она может убежать, запаниковать, умолять о пощаде, или кинуться в драку. Пока вы поддерживаете заклинание, вы получаете -1 ко всем броскам заклинаний. Целью этого заклинания не может быть существо менее разумное, чем животное (магический механизм, нежить, автомат и тому подобное)."
									}
								}
							}
						},
						{
							title: "Волшебное оружие",
							key: "Magic_Weapon",
							data: {
								item: {
									data: {
										title: "Волшебное оружие",
										level: 1,
										tags: [
											"длительное"
										],
										description: "Оружие, которое вы держите в руках во время сотворения заклинания, наносит дополнительные 1к4 урона, пока вы не развеете заклинание. Пока заклинание действует, вы получаете -1 на все заклинания."
									}
								}
							}
						},
						{
							title: "Святилище",
							key: "Sanctuary",
							data: {
								item: {
									data: {
										title: "Святилище",
										level: 1,
										tags: [
										],
										description: "Читая это заклинание, обойдите по кругу участок земли; с этого момент он освящен вашим божеством. Пока вы находитесь в святилище, вы чувствуете, если кто-нибудь в этой области действует со злым умыслом, или заходит в неё с недобрыми намерениями. Все, кого лечат на территории святилища, исцеляют дополнительно 1к4 ОЗ."
									}
								}
							}
						},
						{
							title: "Говорить с мёртвыми",
							key: "Speak_With_Dead",
							data: {
								item: {
									data: {
										title: "Говорить с мёртвыми",
										level: 1,
										tags: [
										],
										description: "Вы ведёте короткую беседу с мёртвым телом. Оно ответит на три ваших вопроса, которые вы зададите, так хорошо, как только сможет, опираясь на знания, которые имело при жизни и получило после смерти."
									}
								}
							}
						},
						{
							title: "Поднять мертвеца",
							key: "Animate_Dead",
							data: {
								item: {
									data: {
										title: "Поднять мертвеца",
										level: 3,
										tags: [
											"длительное"
										],
										description: "Вы призываете на службу голодного духа, который вселяется в свежий труп. Таким образом вы создаёте зомби, который слушается ваших приказов, насколько позволяют его ограниченные способности. Считайте зомби персонажем, которому, доступны лишь основные ходы. Модификаторы всех его характеристик равны +1 и он имеет ОЗ 1. Также ваш зомби получает 1к4 следующих черт: | ◆ Способный. У одной характеристики модификатор +2. | ◆ Прочный. У него +2 ОЗ за каждый ваш уровень. | ◆ Его мозг ещё работает, он может выполнять сложные задания. | ◆ С виду не похож на мертвеца (по крайней мере, день-два). | Зомби существует, пока его не разрушат, нанеся урон, превышающий его ОЗ, или пока вы не прекратите поддерживать заклинание. Пока вы поддерживаете заклинание, вы получаете -1 ко всем заклинаниям."
									}
								}
							}
						},
						{
							title: "Исцелить средние раны",
							key: "Cure_Moderate_Wounds",
							data: {
								item: {
									data: {
										title: "Исцелить средние раны",
										level: 3,
										tags: [
										],
										description: "Ваше волшебство останавливает кровотечение и ставит на место сдвинувшиеся кости. Вы исцеляете 2к8 урона союзнику, которого коснулись."
									}
								}
							}
						},
						{
							title: "Темнота",
							key: "Darkness",
							data: {
								item: {
									data: {
										title: "Темнота",
										level: 3,
										tags: [
											"длительное"
										],
										description: "Выберите область, которую можете видеть. Она погружается в сверхъестественную темноту и тени. Пока заклинание действует, вы получаете штраф -1 ко всем броскам заклинаний."
									}
								}
							}
						},
						{
							title: "Удержать персону",
							key: "Hold_Person",
							data: {
								item: {
									data: {
										title: "Удержать персону",
										level: 3,
										tags: [
										],
										description: "Выберите персону в поле вашего зрения. Пока вы не творите заклинаний и присутствуете неподалёку, она не может делать ничего, кроме как говорить. Действие заклинания заканчивается, как только цель получит урон из любого источника."
									}
								}
							}
						},
						{
							title: "Воскрешение",
							key: "Resurrection",
							data: {
								item: {
									data: {
										title: "Воскрешение",
										level: 3,
										tags: [
										],
										description: "Скажите ведущему, что хотите воскресить мертвеца, чья душа ещё не совсем покинула этот мир. Воскрешение всегда возможно, однако ведущий поставит вам одно или несколько условий (возможно, все сразу), которые нужно выполнить: | ◆ Это займёт несколько дней/недель/месяцев. | ◆ Вам необходима помощь _____________. | ◆ На это уйдёт целое состояние. | ◆ Вам придётся пожертвовать ____________, чтобы сделать это. | В зависимости от обстоятельств, ведущий может разрешить вам выполнить условия не сразу, однако пока вы это не сделаете, воскрешение не будет окончательным. Или не разрешить."
									}
								}
							}
						},
						{
							title: "Откровение",
							key: "Revelation",
							data: {
								item: {
									data: {
										title: "Откровение",
										level: 5,
										tags: [
										],
										description: "Божество отвечает на ваши молитвы и посылает озарение. Ведущий прольёт свет на создавшуюся ситуацию. Когда вы действуете согласно этой информации, вы получаете +1 к следующему броску."
									}
								}
							}
						},
						{
							title: "Исцелить тяжёлые раны",
							key: "Cure_Critical_Wounds",
							data: {
								item: {
									data: {
										title: "Исцелить тяжёлые раны",
										level: 5,
										tags: [
										],
										description: "Союзник, которого вы коснулись, излечивает 3к8 урона."
									}
								}
							}
						},
						{
							title: "Прорицание",
							key: "Divination",
							data: {
								item: {
									data: {
										title: "Прорицание",
										level: 5,
										tags: [
										],
										description: "Назовите человека, место или вещь, о которой хотите узнать. Ваше божество посылает видение цели, ясное, будто вы стоите в двух шагах от неё."
									}
								}
							}
						},
						{
							title: "Заражение",
							key: "Contagion",
							data: {
								item: {
									data: {
										title: "Заражение",
										level: 5,
										tags: [
											"зачарование",
											"длительное"
										],
										description: "Выберите существо в поле вашего зрения. Пока вы поддерживаете заклинание, цель страдает от болезни (на ваш выбор). Пока заклинание действует, вы получаете -1 ко всем броскам заклинаний."
									}
								}
							}
						},
						{
							title: "Глас бессловесного",
							key: "Words_of_the_Unspeaking",
							data: {
								item: {
									data: {
										title: "Глас бессловесного",
										level: 5,
										tags: [
										],
										description: "Коснувшись вещи, вы разговариваете с живущим в ней духом. Эта вещь отвечает в меру своих способностей на три ваших вопроса."
									}
								}
							}
						},
						{
							title: "Истинное зрение",
							key: "True_Seeing",
							data: {
								item: {
									data: {
										title: "Истинное зрение",
										level: 5,
										tags: [
											"призыв",
											"длительное"
										],
										description: "Вашему взору предстаёт истинная суть вещей. Вы видите сквозь иллюзии. Ведущий описывает окружающую обстановку без миражей и фальши любой природы, волшебной или нет. Пока вы поддерживаете заклинание, вы получаете -1 ко всем броскам заклинаний."
									}
								}
							}
						},
						{
							title: "Тюрьма души",
							key: "Trap_Soul",
							data: {
								item: {
									data: {
										title: "Тюрьма души",
										level: 5,
										tags: [
										],
										description: "Вы заключаете душу умирающего существа в самоцвет. Оно осознаёт, что заперто, но на него можно влиять с помощью заклинаний, переговоров и подобного, а броски ходов против него получают +1. Вы можете освободить душу в любой момент, но запереть её в камне вновь нельзя."
									}
								}
							}
						},
						{
							title: "Слово возвращения",
							key: "Word_of_Recall",
							data: {
								item: {
									data: {
										title: "Слово возвращения",
										level: 7,
										tags: [
										],
										description: "Творя заклинание, выберите слово. Произнесение выбранного слова впервые после сотворения этого заклинания моментально перенесёт вас и касавшихся вас союзников в место, где вы творили заклинание. Выбрать можно только одно место; если вы вновь сотворите слово возвращения (до озвучивания предыдущего), оно просто заменит прежнее."
									}
								}
							}
						},
						{
							title: "Исцеление",
							key: "Heal",
							data: {
								item: {
									data: {
										title: "Исцеление",
										level: 7,
										tags: [
										],
										description: "Коснувшись союзника, вы исцеляете его урон (максимальное количество восстановленных так ОЗ не может превышать ваши ОЗ)."
									}
								}
							}
						},
						{
							title: "Урон",
							key: "Harm",
							data: {
								item: {
									data: {
										title: "Урон",
										level: 7,
										tags: [
										],
										description: "Касаясь противника, вы обрушиваете на него божественный гнев: вы наносите 2к8 урона ему и 1к6 урона себе. Этот урон игнорирует броню."
									}
								}
							}
						},
						{
							title: "Разделение",
							key: "Sever",
							data: {
								item: {
									data: {
										title: "Разделение",
										level: 7,
										tags: [
											"длительное"
										],
										description: "Выберите конечность цели — руку, щупальце, крыло. Ваша магия заставляет её отделиться от тела (это не наносит урона, но причиняет сильную боль). Отсутствующая конечность, например, не позволяет крылатому существу летать, а быку — поднять вас на рога. Пока заклинание действует, вы получаете -1 ко всем броскам заклинаний."
									}
								}
							}
						},
						{
							title: "Управление погодой",
							key: "Control_Weather",
							data: {
								item: {
									data: {
										title: "Управление погодой",
										level: 7,
										tags: [
										],
										description: "Вознесите молитву о дожде, либо солнце, либо ветре, либо снеге. Божество ответит в течение дня или около того. Погода изменится согласно вашему желанию, и будет держаться несколько дней."
									}
								}
							}
						},
						{
							title: "Метка смерти",
							key: "Mark_of_Death",
							data: {
								item: {
									data: {
										title: "Метка смерти",
										level: 7,
										tags: [
										],
										description: "Выберите существо, чьё истинное имя вы знаете. Это заклинание проявляет несмываемые руны на указанной поверхности. Если выбранное существо их прочитает, оно умрёт."
									}
								}
							}
						},
						{
							title: "Ураган возмездия",
							key: "Storm_of_Vengeance",
							data: {
								item: {
									data: {
										title: "Ураган возмездияи",
										level: 9,
										tags: [
										],
										description: "Ваше божество устраивает сверхъестественный погодный катаклизм по вашему желанию. Кислота или кровь, льющиеся с небес; облака, состоящие из душ; ветер, который поднимает дома в воздух — или что-то другое, что вы смогли вообразить. Просите, и обрящете."
									}
								}
							}
						},
						{
							title: "Исправление",
							key: "Repair",
							data: {
								item: {
									data: {
										title: "Исправление",
										level: 9,
										tags: [
										],
										description: "Выберите одно событие из прошлого цели. Заклинание исправляет все последствия этого события: урон, яд, болезни, какие-то магические эффекты. ОЗ и болезни исцеляются, действие яда нейтрализуется, колдовство развеивается."
									}
								}
							}
						},
						{
							title: "Аура божества",
							key: "Divine_Presence",
							data: {
								item: {
									data: {
										title: "Аура божества",
										level: 9,
										tags: [
											"длительное"
										],
										description: "Любое существо должно спросить у вас разрешения, прежде чем приблизиться к вам. Ваше разрешение должно звучать чётко и недвусмысленно. Те, кто приблизился к вам без разрешения, каждый раз, когда получают урон, прибавляют к нему дополнительный 1к10. Пока вы поддерживаете это заклинание, вы получаете штраф -1 ко всем броскам заклинаний."
									}
								}
							}
						},
						{
							title: "Поглотить нежизнь",
							key: "Consume_Unlife",
							data: {
								item: {
									data: {
										title: "Поглотить нежизнь",
										level: 9,
										tags: [
										],
										description: "Своим прикосновением вы уничтожаете неразумную нежить. Полученную в результате энергию можно использовать для исцеления себя самого или союзника, к кому прикоснётесь впоследствии. Количество исцелённого урона равно ОЗ существа, которое у него оставалось к тому моменту, как вы его уничтожили."
									}
								}
							}
						},
						{
							title: "Проклятье",
							key: "Plague",
							data: {
								item: {
									data: {
										title: "Проклятье",
										level: 9,
										tags: [
										],
										description: "Назовите город, временное поселение или другое место, где живут люди. Пока заклинание действует, это место терзает проклятье, соответствующее домену вашего божества (саранча, смерть первенцев и тому подобное). Пока заклинание действует, вы получаете штраф -1 к сотворению всех заклинаний."
									}
								}
							}
						}
						
						
					]
					
				},
				
					
				
			]
		},
		
		{
			title: "Предметы",
			key: "items",
			color: "",
			ico: "",

			sub: [
				{
					title: "Оружие",
					key: "weapon",
					color: "",
					ico: "",
			
					sub: [
						{
							title: "Потрепанный лук",
							key: "ragged_bow",
							data: {
								item: {
									data: {
										title: "Потрепанный лук",
										tags: [
											"близко"
										],
										cost: "15",
										weight: "2"
									}
								}
							}
						},
						{
							title: "Хороший лук",
							key: "fine_bow",
							data: {
								item: {
									data: {
										title: "Хороший лук",
										tags: [
											"близко",
											"далеко"
										],
										cost: "60",
										weight: "2"
									}
								}
							}
						},
						{
							title: "Охотничий лук",
							key: "hunters_bow",
							data: {
								item: {
									data: {
										title: "Охотничий лук",
										tags: [
											"близко",
											"далеко"
										],
										cost: "100",
										weight: "1"
									}
								}
							}
						},
						{
							title: "Арбалет",
							key: "crossbow",
							data: {
								item: {
									data: {
										title: "Арбалет",
										tags: [
											"близко",
											"+1 урон",
											"перезарядка"
										],
										cost: "35",
										weight: "3"
									}
								}
							}
						},
						{
							title: "Колчан стрел",
							key: "bundle_of_arrows",
							data: {
								item: {
									data: {
										title: "Колчан стрел",
										tags: [
											
										],
										cost: "1",
										weight: "1",
										hold: "3"
									}
								}
							}
						},
						{
							title: "Эльфийские стрелы",
							key: "elven_arrows",
							data: {
								item: {
									data: {
										title: "Эльфийские стрелы",
										tags: [
											
										],
										cost: "20",
										weight: "1",
										hold: "4"
									}
								}
							}
						},
						{
							title: "Дубинка",
							key: "club",
							data: {
								item: {
									data: {
										title: "Дубинка",
										tags: [
											"взмах меча"
										],
										cost: "1",
										weight: "2"
									}
								}
							}
						},
						{
							title: "Посох",
							key: "staff",
							data: {
								item: {
									data: {
										title: "Посох",
										tags: [
											"взмах меча",
											"двуручный"
										],
										cost: "1",
										weight: "1"
									}
								}
							}
						},
						{
							title: "Кинжал, нож, заточка",
							key: "dagger",
							data: {
								item: {
									data: {
										title: "Кинжал, нож, заточка",
										tags: [
											"рука"
										],
										cost: "2",
										weight: "1"
									}
								}
							}
						},
						{
							title: "Метательный кинжал",
							key: "throwing_dagger",
							data: {
								item: {
									data: {
										title: "Метательный кинжал",
										tags: [
											"метательное",
											"близко,"
										],
										cost: "2",
										weight: "0"
									}
								}
							}
						},
						{
							title: "Короткий меч, топор, молот, булава",
							key: "short_sword",
							data: {
								item: {
									data: {
										title: "Короткий меч, топор, молот, булава",
										tags: [
											"взмах меча"
										],
										cost: "8",
										weight: "1"
									}
								}
							}
						},
						{
							title: "Копье",
							key: "spear",
							data: {
								item: {
									data: {
										title: "Копье",
										tags: [
											"удар копья",
											"метательное",
											"близко",
										],
										cost: "5",
										weight: "1"
									}
								}
							}
						},
						{
							title: "Длинный меч, секира, кистень",
							key: "long_sword",
							data: {
								item: {
									data: {
										title: "Длинный меч, секира, кистень",
										tags: [
											"взмах меча",
											"+1 урон"
										],
										cost: "15",
										weight: "2"
									}
								}
							}
						},
						{
							title: "Алебарда",
							key: "halberd",
							data: {
								item: {
									data: {
										title: "Алебарда",
										tags: [
											"удар копья",
											"+1 урон",
											"двуручное"
										],
										cost: "9",
										weight: "2"
									}
								}
							}
						},
						{
							title: "Рапира",
							key: "rapier",
							data: {
								item: {
									data: {
										title: "Рапира",
										tags: [
											"взмах меча",
											"точное"
										],
										cost: "25",
										weight: "1"
									}
								}
							}
						},
						{
							title: "Рапира дуэлянта",
							key: "dueling_rapier",
							data: {
								item: {
									data: {
										title: "Рапира дуэлянта",
										tags: [
											"взмах меча",
											"точное",
											"пробивание 1"
										],
										cost: "50",
										weight: "2"
									}
								}
							}
						}
					]
					
				},
				
				{
					title: "Броня",
					key: "armor",
					color: "",
					ico: "",
			
					sub: [
						{
							title: "Кожа, кольчуга",
							key: "leather",
							data: {
								item: {
									data: {
										title: "Кожа, кольчуга",
										tags: [
											"1 броня",
											"надетый"
										],
										cost: "10",
										weight: "1"
									}
								}
							}
						},
						{
							title: "Чешуя",
							key: "scale_mail",
							data: {
								item: {
									data: {
										title: "Чешуя",
										tags: [
											"2 броня",
											"неуклюжий",
											"надетый"
										],
										cost: "50",
										weight: "3"
									}
								}
							}
						},
						{
							title: "Латы",
							key: "plate",
							data: {
								item: {
									data: {
										title: "Латы",
										tags: [
											"3 броня",
											"неуклюжий",
											"надетый"
										],
										cost: "350",
										weight: "4"
									}
								}
							}
						},
						{
							title: "Щит",
							key: "shield",
							data: {
								item: {
									data: {
										title: "Щит",
										tags: [
											"+1 броня"
										],
										cost: "15",
										weight: "2"
									}
								}
							}
						}
					]
				},
				
				{
					title: "Снаряжение",
					key: "equipment",
					color: "",
					ico: "",
			
					sub: [
						{
							title: "Снаряжение авантюристаа",
							key: "adventuring_gear",
							data: {
								item: {
									data: {
										title: "Снаряжение авантюриста",
										tags: [
											
										],
										cost: "20",
										weight: "1",
										hold: "5",
										description: "Это вещмешок со всем необходимым. Колышки, веревки, мел, шесты и всё такое. Когда персонажу нужен обычный предмет, он роется в мешке, находит и вычёркивает 1 применение."
									}
								}
							}
						},
						{
							title: "Бинт",
							key: "bandages",
							data: {
								item: {
									data: {
										title: "Бинт",
										tags: [
											"медленное"
										],
										cost: "5",
										weight: "0",
										hold: "3",
										description: "Когда у персонажа есть несколько минут, чтобы перевязать раны товарищу, то он восстанавливает ему 4 ОЗ и зачёркивает 1 применение."
									}
								}
							}
						},
						{
							title: "Травы и припарки",
							key: "poultices",
							data: {
								item: {
									data: {
										title: "Травы и припарки",
										tags: [
											"медленное"
										],
										cost: "10",
										weight: "1",
										hold: "2",
										description: "Когда персонаж аккуратно обрабатывает чьи-то раны травами и припарками, он восстанавливает ему 7 ОЗ и зачеркивает 1 применение."
									}
								}
							}
						},
						{
							title: "Зелье исцеления",
							key: "healing_potion",
							data: {
								item: {
									data: {
										title: "Зелье исцеления",
										tags: [
										],
										cost: "50",
										weight: "1",
										hold: "",
										description: "Выпив зелье целиком, персонаж излечивает 10 ОЗ или одну травму."
									}
								}
							}
						},
						{
							title: "Бочонок дварфийского пива",
							key: "dwarven_stout",
							data: {
								item: {
									data: {
										title: "Бочонок дварфийского пива",
										tags: [
										],
										cost: "10",
										weight: "4",
										hold: "",
										description: "Когда персонаж открывает бочонок и угощает всех, он получает +1 на бросок <i>пирушки</i>. Если выпьет бочонок сам — будет очень-очень пьяным."
									}
								}
							}
						},
						{
							title: "Сумка с книгами",
							key: "bag_of_books",
							data: {
								item: {
									data: {
										title: "Сумка с книгами",
										tags: [
										],
										cost: "10",
										weight: "2",
										hold: "5",
										description: "Если в сумке персонажа есть нужная книга, то, <i>копаясь в памяти</i>, он может проконсультироваться с книгой и получить +1 на этот бросок."
									}
								}
							}
						},
						{
							title: "Противоядие",
							key: "antitoxin",
							data: {
								item: {
									data: {
										title: "Противоядие",
										tags: [
										],
										cost: "10",
										weight: "",
										hold: "",
										description: "Выпив противоядие, персонаж тут же снимает действие одного из ядов."
									}
								}
							}
						},
						{
							title: "Рацион для подземелья",
							key: "dungeon_rations",
							data: {
								item: {
									data: {
										title: "Рацион для подземелья",
										tags: [
											"рацион"
										],
										cost: "3",
										weight: "1",
										hold: "5",
										description: "Не очень вкусный, но есть можно."
									}
								}
							}
						},
						{
							title: "Личный пир",
							key: "personal_feast",
							data: {
								item: {
									data: {
										title: "Личный пир",
										tags: [
											"рацион"
										],
										cost: "10",
										weight: "1",
										hold: "1",
										description: "Как минимум, выглядит он впечатляюще."
									}
								}
							}
						},
						{
							title: "Дварфские сухари",
							key: "dwarven_hardtack",
							data: {
								item: {
									data: {
										title: "Дварфские сухари",
										tags: [
											"рацион",
											"только для дварфов"
										],
										cost: "3",
										weight: "1",
										hold: "7",
										description: "Дварфы говорят, что вкус напоминает им о доме. Остальные — что вкус напоминает им о доме, если дом — охваченная пламенем свиноферма."
									}
								}
							}
						},
						{
							title: "Эльфийские хлебцы",
							key: "elven_bread",
							data: {
								item: {
									data: {
										title: "Эльфийские хлебцы",
										tags: [
											"рацион"
										],
										cost: "10",
										weight: "1",
										hold: "7",
										description: "Только лучшие из друзей эльфов могут отведать этот деликатес."
									}
								}
							}
						},
						{
							title: "Табак полуросликов",
							key: "halfling_pipeleaf",
							data: {
								item: {
									data: {
										title: "Табак полуросликов",
										tags: [
										],
										cost: "5",
										weight: "0",
										hold: "6",
										description: "Когда персонаж делится с кем-то этим табаком, он зачёркивает 2 применения и получает +1 на следующую попытку <i>договориться</i> с ним."
									}
								}
							}
						}
					]
				},
				
				{
					title: "Яды",
					key: "Poisons",
					color: "",
					ico: "",
			
					sub: [
						{
							title: "Тагитово масло",
							key: "oil_of_tagit",
							data: {
								item: {
									data: {
										title: "Тагитово масло",
										tags: [
											"опасное",
											"контакт"
										],
										cost: "15",
										weight: "0",
										hold: "",
										description: "Жертва погружается в лёгкий сон."
									}
								}
							}
						},
						{
							title: "Кровавая водоросль",
							key: "blood_weed",
							data: {
								item: {
									data: {
										title: "Кровавая водоросль",
										tags: [
											"опасное",
											"контакт"
										],
										cost: "12",
										weight: "0",
										hold: "",
										description: "Покуда яд дейсвует, каждый раз, когда жертва бросает урон, она вычитает 1к4 из своего результата."
									}
								}
							}
						},
						{
							title: "Золотой корень",
							key: "golden_root",
							data: {
								item: {
									data: {
										title: "Золотой корень",
										tags: [
											"опасное",
											"контакт"
										],
										cost: "20",
										weight: "0",
										hold: "",
										description: "Жертва считает первого встречного верным союзником, пока не получит доказательств обратного."
									}
								}
							}
						},
						{
							title: "Слезы змея",
							key: "serpents_tears",
							data: {
								item: {
									data: {
										title: "Слезы змея",
										tags: [
											"опасное",
											"контакт"
										],
										cost: "10",
										weight: "0",
										hold: "",
										description: "Всякий, кто наносит урон жертве, бросает дважды и выбирает лучший результат."
									}
								}
							}
						}
					]
				},
				
				{
					title: "Артефакты",
					key: "Artefacts",
					color: "",
					ico: "",
			
					sub: [
						{
							title: "Арго-Таан, Священный Мститель",
							key: "aego_taan",
							data: {
								item: {
									data: {
										title: "Арго-Таан, Священный Мститель",
										tags: [
											"взмах меча"
										],
										weight: "2",
										hold: "",
										description: "Клинков много, Арго-Таан — один. Это меч из золота, серебра и света, чтимый всеми религиями, для которых слово «добро» что-то значит. Его касание — благость, и один его вид вызывает у многих слёзы радости.|В руках паладина он по-настоящему проявляет свою силу. Паладин, владеющий им, увеличивает свой кубик урона до к12 и получает доступ ко всем ходам своего класса. Кроме того, Арго-Таан может ранить любое злое существо, с любой защитой, и ни одно такое существо не может коснуться меча, не испытав жуткой боли. В руках не-паладина это обычный меч, тяжелый и громоздкий (свойство неудобный).|Арго-Таан, хоть и не является разумным, всегда будет притягиваться, как магнит, к делу истинного добра."
									}
								}
							}
						},
						{
							title: "Стрелы Ахерона",
							key: "arrows_of_acheron",
							data: {
								item: {
									data: {
										title: "Стрелы Ахерона",
										tags: [
											
										],
										weight: "1",
										hold: "1",
										description: "Созданные слепым мастером, эти стрелы найдут цель даже в кромешной тьме. Лучник может стрелять с завязанными глазами, и все равно попадет. Но если свет солнца коснется этих стрел, они рассыплются в пыль."
									}
								}
							}
						},
						{
							title: "Секира Короля-Завоевателя",
							key: "axe_conqueror_king",
							data: {
								item: {
									data: {
										title: "Секира Короля-Завоевателя",
										tags: [
											"взмах меча",
										],
										weight: "1",
										description: "Выкованная из стали, но сияющая золотом, эта секира полна магнетизма власти. Ее хозяин вдохновляет соратников: под вашим началом они получают верность+1 безотносительно ваших реальных лидерских качеств."
									}
								}
							}
						},
						{
							title: "Шип из Черных Врат",
							key: "barb_of_the_black_gate",
							data: {
								item: {
									data: {
										title: "Шип из Черных Врат",
										tags: [
										],
										weight: "0",
										description: "Гвоздь или шип, кривой и вечно холодный, вырванный, по слухам, из Врат Смерти. Если вбить его в труп, шип исчезнет, но гарантирует, что мертвец не восстанет — никакое колдовство, кроме сил самой Смерти, не сможет разжечь огонь жизни (естественной или нет) в этом теле."
									}
								}
							}
						},
						{
							title: "Бездонная сумка",
							key: "bag_of_holding",
							data: {
								item: {
									data: {
										title: "Бездонная сумка",
										tags: [
											
										],
										weight: "0",
										description: "Бездонная сумка внутри больше, чем снаружи. Она вмещает бесконечное количество предметов, и её вес никогда не растёт.|Когда вы пытаетесь извлечь из сумки предмет, бросьте+МДР.|На 10+ он у вас.|На 7–9 выберите одно:|• Вы достали то, что нужно, но это заняло время.|• Вы нашли похожий предмет на выбор ведущего, зато моментально."
									}
								}
							}
						},
						{
							title: "Горящее Колесо",
							key: "the_burning_wheel",
							data: {
								item: {
									data: {
										title: "Горящее Колесо",
										tags: [
										],
										weight: "2",
										description: "Древнее деревянное колесо, обитое сталью. Вроде бы от колесницы. С виду обычное, только часть спиц сломана. Но под взором специалиста видна истинная природа Колеса: это дар Бога Огня, пылающий его властью.| Когда вы держите Колесо и произносите имя бога, бросьте+ТЕЛ.| ✴ На 7+ бог одаривает вас , но встреча с ним не проходит бесследно: на 10+ выберите характеристику и снизьте её до следующего модификатора. Например, 14 (+1) становится 12 (+0). | ✴ На 7–9 характеристику выбирает ведущий. | После применения Колесо вспыхивает и горит сверкающим светом. Оно не даёт ни защиты от этого пламени, ни бонусов к плаванию."
									}
								}
							}
						},
						{
							title: "Рог Изобилия Капитана Блая",
							key: "captain_blighs_cornucopia",
							data: {
								item: {
									data: {
										title: "Рог Изобилия Капитана Блая",
										tags: [
										],
										weight: "1",
										description: "Этот витиеватый медный морской рожок украшен символами богов изобилия. Если подуть в него, то, кроме звука, из рога также появится еда. Её хватит, чтобы накормить всех, кто слышит этот звук."
									}
								}
							}
						},
						{
							title: "Шпиль Каркосы",
							key: "the_carcosan_spire",
							data: {
								item: {
									data: {
										title: "Шпиль Каркосы",
										tags: [
											"удар копья",
											"метательное"
										],
										weight: "2",
										description: "Никто не знает, откуда взялось копьё из искривлённого белого коралла. Разум того, кто носит его слишком долго, наполняют чужеродные сны, и он слышит странные мысли «иных». Никто не в безопасности. Когда его используют против «естественных» существ (людей, гоблинов и т.д.), Шпиль действует как обычное копьё. Его истинное предназначение — вредить созданиям, чья странная природа защищает их от обычного оружия. Шпиль может ранить врагов, иным образом неуязвимых. Носитель узнает их с первого взгляда — Шпиль чует своих."
									}
								}
							}
						},
						{
							title: "Плащ Молчаливых Звезд",
							key: "cloack_of_silent_stars",
							data: {
								item: {
									data: {
										title: "Плащ Молчаливых Звезд",
										tags: [
										],
										weight: "1",
										description: "Эта накидка из богатого черного бархата снаружи, сверкающая точками света, искажает судьбу, время и саму реальность, чтобы защитить хозяина. В результате он может спастись от угрозы любой характеристикой. Чтобы сделать это, носитель призывает магию плаща, а игрок описывает, как плащ помогает «нарушать правила». Он может Харизмой убедить огненный шар отклониться или избежать урона от падения, доказав Интеллектом, что падение не причинит вред. Плащ делает такое возможным. Его можно использовать однажды для каждой из характеристик, прежде чем магия плаща иссякнет."
									}
								}
							}
						},
						{
							title: "Монета воспоминаний",
							key: "coin_of_remembering",
							data: {
								item: {
									data: {
										title: "Монета воспоминаний",
										tags: [
										],
										weight: "1",
										description: "На первый взгляд это обычный медный грош, а на самом деле — зачарованная монетка. Хозяин может использовать её (после этого монетка исчезает), чтобы немедленно узнать факт, который был забыт (кем-то, не обязательно именно хозяином монетки). Что-то «неизвестное».Трактовка остаётся на волю богов. Даже если монета не сработала, она нарисует пред оком разума хозяина образ того, кто помнит искомое."
									}
								}
							}
						},
						{
							title: "Обычный свиток",
							key: "common_scroll",
							data: {
								item: {
									data: {
										title: "Обычный свиток",
										tags: [
										],
										weight: "1",
										hold: "1",
										description: "Обычный свиток с заклинанием. Чтобы его использовать, это заклятье должно быть доступно вам или быть в списке заклинаний вашего класса. Вы используете заклинание со свитка — оно действует, всё просто."
									}
								}
							}
						},
						{
							title: "Масло Гибели Дьявола",
							key: "devilsbane_oil",
							data: {
								item: {
									data: {
										title: "Масло Гибели Дьявола",
										tags: [
											
										],
										weight: "1",
										hold: "1",
										description: "Священное масло, созданное в ограниченном количестве сектой горных немых монахов ордена, который защищал человечество от Бездны Дьяволов в древние эпохи. Осталось лишь несколько кувшинов. Если нанести масло на любое оружие и атаковать им обитателя другого измерения, это разрушит магию, пронизывающую существо: отправит его домой, либо же снимет управляющие им чары. Масло держится на оружии несколько часов, прежде чем высохнет и растворится.|Если нанести масло на дверной порог или нарисовать им круг, то оно не пустит существ из других измерений: они просто не пройдут сквозь масло. Оно остаётся на сутки, пока не впитается или не испарится."
									}
								}
							}
						},
						{
							title: "Воск-балабол",
							key: "earworm_wax",
							data: {
								item: {
									data: {
										title: "Воск-балабол",
										tags: [
										],
										weight: "1",
										hold: "1",
										description: "Кажется, будто эта желтоватая свеча, горящая слабеньким, странным светом, никогда не прогорит. Воск всегда прохладный. Капните его в ухо жертвы и получите 3 запаса. За каждый потраченный запас можно задать цели вопрос. Она ответит правду помимо своей воли. Последствия? Вам с ними разбираться."
									}
								}
							}
						},
						{
							title: "Эхо",
							key: "www",
							data: {
								item: {
									data: {
										title: "echo",
										tags: [
											
										],
										weight: "0",
										description: "Эта бутылка на вид пуста. Однако, откупорив её, можно услышать шёпот из другого измерения, что прозвучит однажды и замолкнет. В тишине хозяин почует великую опасность и как её избежать. В любой момент после использования Эха вы можете игнорировать результат одного броска — вашего или другого игрока — и бросить снова. Однажды открытое, Эхо освобождается и исчезает навсегда."
									}
								}
							}
						},
						{
							title: "Линза эпох",
							key: "epoch_lens",
							data: {
								item: {
									data: {
										title: "Линза эпох",
										tags: [
										],
										weight: "1",
										description: "Архимаг, слишком старый и слабый, чтобы покинуть свою башню, создал этот хрупкий, полный силы предмет из золота и стекла, чтобы изучать истории и реликвии, которые так любил. Если посмотреть на предмет сквозь линзу, можно увидеть, кто создал его и откуда он взялся."
									}
								}
							}
						},
						{
							title: "Зрячий камень",
							key: "farsign_stone",
							data: {
								item: {
									data: {
										title: "Зрячий камень",
										tags: [
										],
										weight: "1",
										description: "Вихри облаков наполняют эту дымчатую сферу, и люди вблизи нее часто слышат странные голоса. В древние времена была целая сеть этих камней. Их использовали для связи и наблюдений за удалёнными местами. Глядя в камень, назовите место и бросьте+МДР. |✴ На 10+ вы точно видите это место и можете наблюдать за ним, покуда сосредоточены на сфере. |✴ На 7–9 место вы всё еще видите, но также привлекаете внимание существа (ангела, демона или владельца другого Зрячего Камня), который использует сферу, чтобы наблюдать за вами."
									}
								}
							}
						},
						{
							title: "Кодекс фиаско",
							key: "fiasco_codex",
							data: {
								item: {
									data: {
										title: "Кодекс фиаско",
										tags: [
										],
										weight: "0",
										description: "Говорят, этот толстый том был написан кровью бедняков и баронов-разбойников неким князем демонов с присущим ему чёрным юмором. Книга содержит истории о тех, чьи амбиции затмили рассудок. Читая их, вы приобретёте трезвый взгляд на вещи, но страх будет сосать под ложечкой.| Читая Кодекс, бросьте+МДР | ✴ На 10+ задайте два вопроса из списка ниже. | ✴ На 7–9 задайте один вопрос:| • Какая возможность для меня лучшая прямо сейчас?|• Кого я должен предать, чтобы получить преимущество?|• Кому из союзников я не должен доверять?| Кодекс отвечает каждому лишь однажды, чтение занимает 2-3 часа."
									}
								}
							}
						},
						{
							title: "Фляжка дыхания",
							key: "flask_of_breath",
							data: {
								item: {
									data: {
										title: "Фляжка дыхания",
										tags: [
										],
										weight: "0",
										description: "Простая, но незаменимая вещица, когда нечем дышать. Фляжку нельзя наполнить (всё просто проливается наружу), и она лишь кажется пустой. В реальности она наполнена бесконечным запасом воздуха. Если пометить её под воду, то она будет вечно пускать пузыри. Если приложить фляжку ко рту, то можно дышать — дым, к примеру, перестанет быть проблемой. Уверен, вы придумаете тысячи способов её нетривиального использования."
									}
								}
							}
						},
						{
							title: "Крылья из воска",
							key: "wax_mings",
							data: {
								item: {
									data: {
										title: "Крылья из воска",
										tags: [
										],
										weight: "1",
										description: "Кто не хотел парить в лазурных небесах? В попытке воплотить древнюю мечту прикованных к земле людей, возникли эти волшебные крылья. У них много имён, они созданы разными магами и обычно принимают форму крыльев тех птиц, что живут близ создателя. Носят их с помощью сбруи, хотя в ряде жутких случаев применяют хирургию. | Взмывая в небо на этих крыльях, бросьте+ЛОВ. | ✴ На 10+ полёт управляем, и вы можете парить, сколько вздумается.| ✴ На 7–9 вы летите, но недолго, неровно или непредсказуемо. | ✴ На 6- вы взлетаете но приземление и всё, что между, остаётся на волю ведущего."
									}
								}
							}
						},
						{
							title: "Недвижимый прут",
							key: "immovable_rod",
							data: {
								item: {
									data: {
										title: "Недвижимый прут",
										tags: [
										],
										weight: "0",
										description: "Забавный металлический прут с кнопкой. Нажмите на кнопку, и прут просто останется на месте. Он застынет — в воздухе, стоя или лёжа. Его не сдвинуть: можете толкать его, тянуть, делать всё, что угодно, — прут останется на месте. Возможно, он уничтожим. Или нет. Нажмите кнопку снова, и прут свободен — можете забрать его с собой. Иметь при себе такую упрямую вещь может быть полезно."
									}
								}
							}
						},
						{
							title: "Бесконечная книга",
							key: "infinite_book",
							data: {
								item: {
									data: {
										title: "Бесконечная книга",
										tags: [
										],
										weight: "1",
										description: "В этой книге бесконечное количество страниц, а на страницах — все, что было, есть и будет. К счастью, наличествует отличное оглавление. | Когда вы <i>копаетесь в памяти</i>, сверяясь с книгой, то получаете дополнительный вариант. | ✴ На 12+ мастер даёт решение проблемы или ситуации, в которой вы оказались."
									}
								}
							}
						},
						{
							title: "Изучки",
							key: "inspectacles",
							data: {
								item: {
									data: {
										title: "Изучки",
										tags: [
										],
										weight: "0",
										description: "Грубо обработанные стёкла в деревянной оправе. Они дребезжат и вот-вот развалятся, но каким-то образом позволяют носителю видеть куда больше обычного. Когда вы <i>изучаете обстановку</i> с помощью этих линз, правила меняются.| ✴ На 10+ вы можете задать три любых вопроса, не обязательно из списка, и ведущий ответит, если в вашей ситуации зрение в принципе может помочь."
									}
								}
							}
						},
						{
							title: "Стратагемы Ку-Ме",
							key: "kumeh_maneuver",
							data: {
								item: {
									data: {
										title: "Стратагемы Ку-Ме",
										tags: [
											
										],
										weight: "1",
										description: "Огромный кожаный том, натертый до блеска руками сотен великих полководцев, эта книга передаётся от воина к воину, от отца к сыну по линиям воителей прошлого. Всякий, кто впервые его дочитал, может бросить+ИНТ. |✴ На 10+ он получает 3 запаса.| ✴ На 7–9 — 1 запас. Запасы можно потратить, чтобы дать компаньону тактический или стратегический совет: в любой момент, независимо от расстояния, вы можете помочь ему в любом броске. |В случае неудачи ведущий получает 1 запас и может потратит его, чтобы дать –2 на любой ваш бросок или бросок того неудачника, что прислушался к совету."
									}
								}
							}
						},
						{
							title: "Оплаканное напоминание",
							key: "lamented_momento",
							data: {
								item: {
									data: {
										title: "Оплаканное напоминание",
										tags: [
										],
										weight: "0",
										description: "Локон рыжих волос, перемотанных чёрной лентой, неподвластный течению времени. В нем — память и чувства девушки, что так часто встречала Смерть у Черных Врат. В конце концов они полюбили друг друга, и она оставила мир, чтобы быть с ним вечно. Её память защищает хозяина локона. Если он оказывается у Врат, Напоминание можно отдать за автоматический результат 10+ на броске <i>последнего вздоха</i>."
									}
								}
							}
						},
						{
							title: "Магнитный щит",
							key: "loestone_shield",
							data: {
								item: {
									data: {
										title: "Магнитный щит",
										tags: [
											"броня +1",
										],
										weight: "1",
										description: "Какой недалёкий болван сделал эту штуку? Щиты должны отражать металл, а не притягивать! Магнитный щит, украшенный гербом со львом, стоящим на задних лапах, притягивает к себе клинки и стрелы. Сражаясь с вооружёнными металлическим оружием врагами, вы можете потратить один запас на каждую цель, чтобы разоружить её. Еще иногда вы будете собирать со щита горсти мелочи."
									}
								}
							}
						},
						{
							title: "Карта последнего патруля",
							key: "map_of_the_last_patrol",
							data: {
								item: {
									data: {
										title: "Карта последнего патруля",
										tags: [
										],
										weight: "0",
										description: "Древний орден отважных следопытов когда-то патрулировал земли, защищая деревни и предупреждая королей и королев о приближающейся опасности. Они давно сгинули, но их наследие осталось. Если отметить эту карту кровью группы людей, она будет всегда показывать их местоположение — покуда они находятся в пределах карты, конечно."
									}
								}
							}
						},
						{
							title: "Голова Нэда",
							key: "neds_head",
							data: {
								item: {
									data: {
										title: "Голова Нэда",
										tags: [
										],
										weight: "1",
										description: "Старый череп без челюсти, помнящий безрассудство своего хозяина — человека, у которого чести было больше, чем мозгов. Один раз за ночь владелец черепа может спросить: «Кто точит на меня зуб?» — и череп назовёт имя грустным, одиноким голосом. Если владельца черепа убьют, то череп таинственным образом исчезнет. Никто не знает, где он появится в следующий раз."
									}
								}
							}
						},
						{
							title: "Ключ ночного странника",
							key: "nightsiders_key",
							data: {
								item: {
									data: {
										title: "Ключ ночного странника",
										tags: [
										],
										weight: "0",
										description: "Этот ключ откроет любую дверь, в которую вам не положено входить. Покуда вы не выдаёте своего присутствия (вас не слышат, не видят, не замечают) и не забираете с собой ничего, кроме воспоминаний, магия ключа скроет факт проникновения. Будто вас там и не было."
									}
								}
							}
						},
						{
							title: "Священные травы",
							key: "sacred_herbs",
							data: {
								item: {
									data: {
										title: "Священные травы",
										tags: [
										],
										weight: "0",
										description: "Собранные и приготовленные забытым орденом монахов-волшебников, эти травы обычно собраны в связки на два-три применения. | В сухом месте они будут храниться вечно, а забитые в трубку или добавленные в жаровню травы выделяют густой синий дым. Вдохнув его, вы получите видения о далеких местах и временах. | Когда вы конценцентрируетесь на вещи, человеке или месте, вдыхая дым трав, бросьте+МУД. | ✴ На 10+ видение ясное и полезное.| ✴ На 7–9 видение мутное и полное метафор. | ✴ При провале ведущий спросит: «Чего ты боишься больше всего?» Вы должны ответить искренне."
									}
								}
							}
						},
						{
							title: "Утка Сартара",
							key: "sartar_duck",
							data: {
								item: {
									data: {
										title: "Утка Сартара",
										tags: [
										],
										weight: "0",
										description: "Причудливая, вырезанная вручную деревянная утка. Кто сделал эту забавную вещь? С уткой в руках вы станете крайне одарённым рассказчиком — на каком бы языке вы ни говорили, ваша история будут ясна слушателям. Слова они, может, и не поймут, но смысл точно уловят."
									}
								}
							}
						},
						{
							title: "Слёзы Аннелизы",
							key: "tears_of_annalise",
							data: {
								item: {
									data: {
										title: "Слёзы Аннелизы",
										tags: [
										],
										weight: "0",
										description: "Мутные красные самоцветы размером с ноготь, Слёзы Аннелизы всегда идут в парах. Проглоченные двумя разными людьми, они связывают их — когда одного обуревают эмоции (особенно грусть, потеря, страх или желание), другой ощущает то же самое. Эффект работает, пока один не прольёт кровь другого."
									}
								}
							}
						},
						{
							title: "Комната телепортации",
							key: "teleportation_room",
							data: {
								item: {
									data: {
										title: "Комната телепортации",
										tags: [
											"медленный",
										],
										description: "Джеймс Девятипалый, гениальный маг-эксцентрик, создал эти волшебные аппараты. Стены комнаты исчерчены рунами и символами, мерцающими голубым светом. Когда вы заходите в комнату и называете место, бросьте+ИНТ. | ✴ На 10+ вы попадаете именно туда. | ✴ На 7–9 ведущий выбирает безопасное место неподалёку. | ✴ При провале, вы окажетесь где-то. Близко ли? Может быть, но там точно небезопасно. С теми, кто балуется с пространством, порой творятся странные вещи."
									}
								}
							}
						},
						{
							title: "Доспехи Тимунна",
							key: "timmuns_armor",
							data: {
								item: {
									data: {
										title: "Доспехи Тимунна",
										tags: [
											"броня 1",
										],
										weight: "1",
										description: "Этот незаметный комплект брони выглядит по-разному для разных людей, но всегда проявляется как соответствующее случаю одеяние. Для наблюдателей хозяин доспехов всегда будет на пике моды."
									}
								}
							}
						},
						{
							title: "Правдивый жир Титуса",
							key: "titus_truthfull_tallow",
							data: {
								item: {
									data: {
										title: "Правдивый жир Титуса",
										tags: [
										],
										weight: "0",
										description: "Свечка из воска цвета меди и слоновой кости и фитилём из скрученной серебряной проволоки. Пока свеча горит, те, на кого падает её свет, не могут лгать. Молчать или умалчивать — могут, но если вопрос задан напрямую, то ответ должен быть правдивым."
									}
								}
							}
						},
						{
							title: "Игривая верёвка",
							key: "tricksy_rope",
							data: {
								item: {
									data: {
										title: "Игривая верёвка",
										tags: [
										],
										weight: "1",
										description: "Верёвка, которая выполняет трюки, как умная, послушная змея. Скажите «Узел!», «Соскользни!» или «Иди сюда», и она подчинится."
									}
								}
							}
						},
						{
							title: "Надёжная рука",
							key: "sterling_hand",
							data: {
								item: {
									data: {
										title: "Надёжная рука",
										tags: [
										],
										weight: "0",
										description: "Творение лудильщиков дварфов, эта серебряная рука покрыта рунами силы и восстановления. Созданная, чтобы заменять конечности, потерянные в несчастных случаях на шахтах, Надёжная рука соединяется с раной, старой или новой. Она прочная, сильная, и её можно использовать как оружие (расстояние близко). Серебро, из которого рука сделана, достаточно чистое, чтобы вредить созданиям, которым оно опасно."
									}
								}
							}
						},
						{
							title: "Перчатки Веллиуса",
							key: "vellius_gauntlets",
							data: {
								item: {
									data: {
										title: "Перчатки Веллиуса",
										tags: [
										],
										weight: "1",
										description: "Созданные для Веллиуса Неуклюжего, Веллиуса Кривые Руки, Веллиуса Дурня, эти перчатки из простой ткани помогают не ронять вещи, которые вы не хотите ронять. Вас нельзя обезоружить, вы не соскользнёте с верёвки или лестницы. Но если кто-то сильный тянет вас за ноги, пока вы держитесь за что-то прочное, последствия могут быть печальными."
									}
								}
							}
						},
						{
							title: "Глефа насилия",
							key: "violation_glaive",
							data: {
								item: {
									data: {
										title: "Глефа насилия",
										tags: [
											"удар копья",
										],
										weight: "2",
										description: "Легендарный клинок, который, как говорят, заброшен назад во времени из мрачного будущего. Глефа насилия создана из странного зелёного железа. Клинок наносит вред как телу, так и разуму того, кого ранит. Когда вы рубите и кромсаете на 10+, появляется еще один вариант: вы наносите повреждения, позволяете контратаковать себя и внушаете жертве эмоции на свой выбор (страх, доверие или почитание)."
									}
								}
							}
						},
						{
							title: "Ворпальный меч",
							key: "vorpal_sword",
							data: {
								item: {
									data: {
										title: "Ворпальный меч",
										tags: [
											"пробивание 3",
											"взмах меча",
										],
										weight: "2",
										description: "Чик-чик, и всё. Острее острого, этот обычный с виду меч создан, чтобы отделять одно от другого — ногу от тела, или человека от его жизни. Когда вы наносите урон Ворпальным мечом, враг должен выбрать что-то (предмет, преимущество, конечность) и потерять это навсегда."
									}
								}
							}
						}
					]
				}
			]
		},
		
		{
			title: "Траты",
			key: "expense",
			color: "",
			ico: "",
			sub: [
				{
					title: "Услуги",
					key: "services",
					color: "",
					ico: "",
			
					data: {
						list: {
							meta: {								
								bShuffle: false,
								bShowRandom: false,
							},
							data: [
								{
									title: "Неделя в деревенском трактире",
									subtitle: "14-Харизма монет"
								},
								{
									title: "Неделя в приличной таверне",
									subtitle: "30-Харизма монет"
								},
								{
									title: "Неделя в лучшем заведении города",
									subtitle: "43-Харизма монет"
								},
								{
									title: "Неделя низкоквалифицированного ручного труда",
									subtitle: "10 монет"
								},
								{
									title: "Месячное жалование в армии",
									subtitle: "30 монет"
								},
								{
									title: "Индивидуальный предмет у кузнеца",
									subtitle: "цена предмета+50 монет"
								},
								{
									title: "Компания на ночь",
									subtitle: "20-Харизма монет"
								},
								{
									title: "Вечер песен и танцев",
									subtitle: "18-Харизма монет"
								},
								{
									title: "Сопровождение на один день по дороге, полной бандитов",
									subtitle: "20 монет"
								},
								{
									title: "Сопровождение на один день по дороге, полной чудовищ",
									subtitle: "54 монеты"
								},
								{
									title: "Убийство в подворотне",
									subtitle: "5 монет"
								},
								{
									title: "Заказное убийство",
									subtitle: "120 монет"
								},
								{
									title: "Услуги хирурга",
									subtitle: "5 монет"
								},
								{
									title: "Молитва за усопшего в течение месяца",
									subtitle: "1 монета"
								},
								{
									title: "Починка обычного предмета",
									subtitle: "25% стоимости предмета"
								}
							]
						}
					}
				},
				{
					title: "Продукты",
					key: "meal",
					color: "",
					ico: "",
			
					data: {
						list: {
							meta: {								
								bShuffle: false,
								bShowRandom: false,
							},
							data: [
								{
									title: "Вкусный обед для одного",
									subtitle: "1 монета"
								},
								{
									title: "Паршивый обед для семьи",
									subtitle: "1 монета"
								},
								{
									title: "Пир",
									subtitle: "15 монет на человека"
								}
							]
						}
					}
				},
				{
					title: "Транспорт",
					key: "trnsport",
					color: "",
					ico: "",
			
					data: {
						list: {
							meta: {								
								bShuffle: false,
								bShowRandom: false,
							},
							data: [
								{
									title: "Тележка и ослик, давший клятву делить вашу ношу",
									subtitle: "50 монет, нагрузка 20"
								},
								{
									title: "Конь",
									subtitle: "75 монет, нагрузка 10"
								},
								{
									title: "Боевой конь",
									subtitle: "400 монет, нагрузка 12"
								},
								{
									title: "Фургон",
									subtitle: "150 монет, нагрузка 40"
								},
								{
									title: "Барка",
									subtitle: "50 монет, нагрузка 15"
								},
								{
									title: "Речная лодка",
									subtitle: "150 монет, нагрузка 20"
								},
								{
									title: "Торговый корабль",
									subtitle: "5 000 монет, нагрузка 200"
								},
								{
									title: "Боевой корабль",
									subtitle: "20 000 монет, нагрузка 100"
								},
								{
									title: "Путешествие по безопасному маршруту",
									subtitle: "1 монета"
								},
								{
									title: "Путешествие по тяжелому маршруту",
									subtitle: "10 монет"
								},
								{
									title: "Путешествие по опасному маршруту",
									subtitle: "100 монет"
								}
							]
						}
					}
				},
				{
					title: "Недвижимость",
					key: "realty",
					color: "",
					ico: "",
			
					data: {
						list: {
							meta: {								
								bShuffle: false,
								bShowRandom: false,
							},
							data: [
								{
									title: "Землянка",
									subtitle: "20 монет"
								},
								{
									title: "Домик",
									subtitle: "500 монет"
								},
								{
									title: "Дом",
									subtitle: "2 500 монет"
								},
								{
									title: "Особняк",
									subtitle: "50 000 монет"
								},
								{
									title: "Крепость",
									subtitle: "77 000 монет"
								},
								{
									title: "Замок",
									subtitle: "250 000 монет"
								},
								{
									title: "Великий замок",
									subtitle: "1 000 000 монет"
								},
								{
									title: "Месячные расходы",
									subtitle: "1% от стоимости"
								}
							]
						}
					}
				},
				{
					title: "Взятки",
					key: "bribes",
					color: "",
					ico: "",
			
					data: {
						list: {
							meta: {								
								bShuffle: false,
								bShowRandom: false,
							},
							data: [
								{
									title: "Приданое крестьянина",
									subtitle: "200-Харизма монет"
								},
								{
									title: "«Защита» для небольшого дела",
									subtitle: "100-Харизма монет"
								},
								{
									title: "Взятка для чиновника",
									subtitle: "50-Харизма монет"
								},
								{
									title: "Соблазнительная сумма",
									subtitle: "80-Харизма монет"
								},
								{
									title: "Предложение, от которого нельзя отказаться",
									subtitle: "500-Харизма монет"
								}
							]
						}
					}
				},
				{
					title: "Подарки и роскошь",
					key: "gifts",
					color: "",
					ico: "",
			
					data: {
						list: {
							meta: {								
								bShuffle: false,
								bShowRandom: false,
							},
							data: [
								{
									title: "Подарочек для селянки",
									subtitle: "1 монета"
								},
								{
									title: "Достойный подарок",
									subtitle: "55 монет"
								},
								{
									title: "Дар для дворянина",
									subtitle: "200 монет"
								},
								{
									title: "Кольцо или колье",
									subtitle: "75 монет"
								},
								{
									title: "Наряд",
									subtitle: "105 монет"
								},
								{
									title: "Отличный гобелен",
									subtitle: "350+ монет"
								},
								{
									title: "Венец, достойный короля",
									subtitle: "5 000 монет"
								}
							]
						}
					}
				},
				{
					title: "Добыча",
					key: "Hoards",
					color: "",
					ico: "",
			
					data: {
						list: {
							meta: {								
								bShuffle: false,
								bShowRandom: false,
							},
							data: [
								{
									title: "Тайник гоблина",
									subtitle: "2 монеты"
								},
								{
									title: "Безделушки человека-ящера",
									subtitle: "5 монет"
								},
								{
									title: "«Бесценный» клинок",
									subtitle: "80 монет"
								},
								{
									title: "Дань воеводы орков",
									subtitle: "250 монет"
								},
								{
									title: "Сокровища дракона",
									subtitle: "130 000 монет"
								}
							]
						}
					}
				}
			]
		},

		{
			title: "Провалы",
			key: "fails",
			color: "",
			ico: "",
			sub: [
				{
					title: "Худшие исходы, сложные выборы",
					key: "worst",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Новая опасность заменяет старую",
								"Опасность, которой избежали сейчас, в будущем усилится (новые враги, или растущий риск)",
								"Непредвиденное последствие успешного действия (например, попытка запугать врага, разозлившая его)",
								"Вместо персонажа угрозе подвергается союзник",
								"Действие чего-то требует: денег, снаряжения, удачного положения",
								"Два варианта, у каждого свои плюсы и минусы",
								"Что-то важное для игроков повреждается (снаряжение, опорная колонна, хорошее место, репутация и др.)",
								"Позорная осечка",
								"Появление нового врага",
								"Заминка, потеря равновесия, или утрата предмета",
								"Изменение места, или позиции к худшему",
								"Игроки пропускают что-то важное (улику, угрозу, подкрадывающегося врага, изменение обстоятельств)",
								"Новая угроза окружения (пожар, дым, ломающиеся опоры, каменные булыжники, потоп и т.д.)",
								"Ярость бога, персонажа ведущего, или монстра",
								"Потеря равновесия, запутывание, или неудачное положение: -1 к следующему броску"
							]
						}
					}
				},
				{
					title: "Бой",
					key: "fight",
					color: "",
					ico: "",
					sub: [
						{
							title: "Мощный противник",
							key: "might_enemy",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
												"Твоя атака отбита с такой силой, что ты теряешь хватку, и твое оружие улетает в другой конец комнаты",
												"Противник схватил твой щит, вырвал его из твоих рук и бьет им тебя по голове!",
												"Противник сбивает тебя с ног. Ты отлетаешь и врезаешься в союзника",
												"Противник поднимает тебя и бросает в ближайшее опасное место",
												"Твое оружие застревает в броне противника и выскакивает из твоих рук",
												"Противник хватает ближайший предмет мебели и бросает его в тебя",
												"Массивный удар поражает твой щит так сильно, что ломает тебе предплечье. Теперь эта рука бесполезна",
												"Тебя ударили с достаточной силой, чтобы ошеломить и дезориентировать на пару минут",
												"Противник опрокинул на тебя огромный предмет, прижав тебя под ним",
												"Сильный удар в грудь выбивает весь воздух из твоих легких"
										]
								}
							}
						},
						{
							title: "Проворный противник",
							key: "agile_enemy",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
											"Противник легко уклоняется от твоей атаки, а ты спотыкаешься и падаешь на землю",
											"Несколькими быстрыми взмахами противник перерезает ремни твоего рюкзака, и твое снаряжение падает на пол",
											"Противник отклоняет атаку твоего союзника так, что тот ударяет тебя вместо него",
											"Противник уклоняется от твоей атаки и заходит сзади, хватая твой плащ и оборачивая его вокруг твоей головы",
											"Из-за маневров противника ты оказываешься в опасной позиции",
											"Быстрая последовательность ударов, уклонений и парирований приводит к тому, что твое оружие оказывается в руках противника",
											"Твой ремень разрезан, штаны спущены на пол",
											"Противник делает подсечку и ты спотыкаешься, оказываясь в опасности",
											"Ты вложил слишком много силы в удар и попадаешь по одному из союзников",
											"Во время боя сопернику удается снять с тебя важный предмет"
										]
								}
							}
						},
						{
							title: "Зверь",
							key: "beast",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
											"Зверь вцепился в тебя зубами, трясет и швыряет в сторону, как тряпичную куклу",
											"Ты втоптан в землю и придавлен гигантской ногой зверя",
											"Зверь бьет тебя головой, сбивая с ног и наталкивая на одного из союзников",
											"Зверь подбросил тебя в воздух. Ты перелетаешь и падаешь позади него",
											"Мощным взмахом хвоста зверь сбивает тебя с ног",
											"Зверь вырывает щит из твоей руки и разрушает его мощными челюстями",
											"Твое оружие застряло в шкуре зверя, оно выскакивает из твоих рук",
											"Зверь хватает тебя зубами и бросается прочь вместе с тобой",
											"Дальняя атака вашего союзника рикошетит от его шкуры, поражая тебя",
											"Зверь убит, но его массивный труп падает на тебя, придавливая"
										]
								}
							}

						},
						{
							title: "Дальний бой",
							key: "range",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
											"Твой выстрел не попадает в цель, вместо этого он поражает что-то ценное и бьющееся",
											"Ты спотыкаешься, роняя все свои боеприпасы на землю",
											"Скрытный враг подкрадывается к тебе, пока ты сосредоточенно прицеливаешься",
											"Использование твоего оружия усугубляет предыдущую травму, нанося дополнительный урон",
											"Поиски позиции для хорошего выстрела ставят тебя в очень опасное положение",
											"Твои выстрелы привлекают внимание вражеских стрелков",
											"Твоя сосредоточенность на цели позволяет вражескому стрелку попасть в тебя",
											"Твой выстрел сбивает лампу или фонарь, из-за чего рядом с твоими врагами разгорается пламя",
											"Ты обнаруживаешь небольшую неисправность в твоем оружии. Тебе нужно время, чтобы починить его",
											"Твой выстрел отклонен и поражает одного из твоих союзников"
										]
								}
							}
						},
						{
							title: "Рукопашная схватка",
							key: "melee",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
											"Твой удар пришелся в защищенную броней область, и ты сломал пальцы",
											"Когда ты пинаешь противника, он крепко хватает тебя за лодыжку",
											"Твой противник ловко выскальзывает из захвата и сам берет твою голову в «замок»",
											"Ты недооценил ловкость противника, получил подсечку и упал ничком",
											"Ты поразил противника, но травмировал себя в атаке",
											"Из-за твоего маневра и ты, и твой противник теряете равновесие",
											"Схваченный тобой противник умудряется откусить один из твоих пальцев",
											"Противник бьет тебя головой, разбивая тебе нос и оглушая на мгновение",
											"Ты не рассчитал свой удар в прыжке и в итоге приземлился в ближайшем опасном месте",
											"Ты расквасил нос противника, но брызги крови ослепляют тебя на мгновение"
										]
								}
							}
						},
					]
				},
				{
					title: "Общение",
					key: "chat",
					color: "",
					ico: "",
					sub: [
						{
							title: "Дворяне",
							key: "noble",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
												"Ты нарушил этикет и должен заплатить большой штраф",
												"Твои слова трактуются как демонстрация расположения к нежелательной персоне",
												"На тебя смотрят как на неотесанного мужлана",
												"Разъяренный дворянин нанимает убийцу, чтобы отомстить тому, кто его публично оскорбил",
												"Ты обязан встать на колени и склонить голову, чтобы говорить с этим НПС",
												"Ты выставляешь себя полным дураком, и слухи о тебе распространяются, как лесной пожар",
												"Твой любимый дворянский наряд создает тебе проблемы среди простого народа (завышенные цены, информация недоступна и т.д.)",
												"Мало того, что ты не получишь желаемого, дворянин еще и начнет активно действовать против твоих интересов",
												"Огромное количество бюрократической волокиты задерживает тебя",
												"Телохранители дворянина собираются ударить тебя за твою дерзость; сопротивление может ухудшить ситуацию…"
										]
								}
							}
						},
						{
							title: "Духовенство",
							key: "clergy",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Твое присутствие оскорбительно для их божества, и они хотят принести тебя ему в жертву",
										"Духовенство считает тебя агентом конкурирующего божества",
										"Тебя будут слушать только в том случае, если ты примешь молебную позу",
										"Обстоятельства принуждают тебя помочь религиозной организации с опасной задачей",
										"Твои оскорбительные поступки приводят к тому, что тебя объявляют отступником и врагом веры",
										"Чьи-то наблюдения за твоим поведением позволяют ему предположить, что ты — «избранный» из пророчества",
										"Чтобы доказать свою искренность, тебя просят принять участие в церемонии, которая позволит высокопоставленным священнослужителям определять твое местонахождение",
										"Церковный указ запрещает последователям веры взаимодействовать с тобой каким бы то ни было образом",
										"Для продолжения пути требуется огромное благотворительное пожертвование",
										"Что-то в тебе (татуировка, украшение, шрам) является для них меткой зла и врага их бога"
									]
								}
							}
						},
						{
							title: "Представители закона",
							key: "lowyer",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Они не считают сказанное тобой даже отдаленно правдоподобным",
										"Они принимают тебя за преступника, за голову которого объявлена большая награда",
										"Они объявляют тебя преступником, за голову которого объявлена большая награда",
										"Допрос охранников сильно задерживает тебя",
										"Ты подвергаешься чрезвычайно агрессивному обыску, в ходе которого тебе придется снять все свои вещи",
										"Ты случайно ввязался в очень громкое преступление",
										"Во время обыкновенного обыска охранник нечаянно активирует твой опасный предмет",
										"Для того, чтобы продолжить путь, тебе нужно заплатить здоровенную взятку",
										"Тебе запрещен доступ к определенному месту (это может быть здание или даже целый город)",
										"Они знают, что ты создаешь проблемы, и представители закона всеми способами стараются мешать тебе"
									]
								}
							}
						},
						{
							title: "Преступники",
							key: "criminal",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Пока ты говоришь, в комнату скрытно проникает наемный убийца",
										"Пока ты отвлекаешься, карманник с ловкими руками крадет твои ценные вещи",
										"Твои собеседники говорят тебе то, что ты хочешь услышать, но уже продали тебя",
										"Тебе дают ложную информацию. Опасно ложную информацию",
										"После того, как ты уходишь, организация отправляет за тобой наемного убийцу",
										"Они продолжат говорить с тобой, только если ты переживешь испытание…",
										"Подслушав ваш разговор, преступники понимают нечто, что вы бы предпочли скрыть",
										"Тебя вынудили совершить преступление и взять вину на себя",
										"В твой напиток подмешано снадобье, заставляющее тебя говорить только правду",
										"Это ловушка! «Преступник» на самом деле — замаскированный представитель закона"
									]
								}
							}
						},
						{
							title: "Группы",
							key: "crowd",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Толпа заводит кричалку, касающуюся тебя и привлекающую к тебе нежелательное внимание",
										"Несколько членов группы становятся твоими увлеченными фанатами, усложняя твою жизнь тем, что пытаются завоевать твое расположение",
										"Твои слова провоцируют беспорядки на улицах",
										"Толпа устремляется вперед, сбивая тебя с ног и топча",
										"Толпа захватывает тебя и движется вместе с тобой. Ты невредим, но теряешь важные предметы",
										"Ты настолько вдохновил группу, что они не оставят тебя в покое, следуя по пятам и распевая дифирамбы",
										"Твои слова побуждают группу к действию, но, к сожалению, оно противоположно твоим намерениям",
										"Ты оскорбил и возмутил группу, превратив их в толпу, которая будет охотиться за тобой",
										"Группа не хочет иметь с вами ничего общего и советует другим избегать вас",
										"Группа сплачивается вокруг единой цели, но не той, которую ты хотел"
									]
								}
							}
						},
					]
				},
				{
					title: "Магия",
					key: "magic",
					color: "",
					ico: "",
					sub: [
						{
							title: "Атакующие заклинания в бою",
							key: "attack_spell",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"От твоего заклинания, атакующего по площади, расходится ударная волна, нанося большой урон окружающим объектам",
										"Стихийная энергия твоего заклинания заземляется через твое тело, причиняя урон тебе и всем, кто находится рядом с тобой",
										"Твоя цель каким-то образом поглощает твое заклинание и теперь может обратить его обратно на тебя",
										"Ошибочка вышла: вместо цели ты поразил одного из своих товарищей",
										"Твоя волшебная сила каким-то образом помогает цели, а не вредит ей",
										"Энергия твоего волшебства растворяется в цели, делая ее невосприимчивой к твоей магии",
										"Энергия заклинания поглощается оружием цели, временно зачаровывая его",
										"Твое заклинание повлияло только на неодушевленные предметы и окружающую среду, однако его эффект сохраняется на некоторое время",
										"Вместо предполагаемой разрушительной энергии (огонь, молния и т. д.) твое заклинание вызывает нечто гораздо менее вредное (перья, радуги и т. д)",
										"Ты становишься уязвимым к типу энергии, которую ты использовал в своем последнем заклинании"
									]
								}
							}
						},
						{
							title: "Обращение к божеству",
							key: "god_talk",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"По воле твоего бога ты будешь ярко светиться последующие несколько часов",
										"Ты страдаешь от повреждений, болезни или проклятия, которое снимаешь с другого персонажа",
										"Используя силу твоего божества, ты обращаешь на себя гнев его заклятого врага",
										"Безрассудная трата даров, данных тебе божеством, побуждает его забрать твою силу до тех пор, пока ты должным образом не покаешься",
										"Твоя целительная сила лечит всех существ поблизости (и дружественных, и враждебных), в том числе воскрешая погибших!", 
										"Сила переполняет тебя, на какое-то время твоя свободная воля подавляется, и ты действуешь полностью в соответствии с мотивами и планами твоего божества",
										"Неподалеку слышится священное песнопение; оно достаточно громкое, но определить, откуда именно оно исходит, весьма сложно",
										"Испытание твоей верности начинается! Ты становишься уязвимым к атаками врагов твоего божества",
										"Демонстрируя расположение божества к тебе, ты привлекаешь нескольких фанатиков, которые начинают поклоняться тебе как божественному посланнику",
										"Ты видишь мертвых людей! Безобидные души усопших тянутся к твоей святой ауре. Они невидимы для других, но чрезвычайно раздражают тебя"
									]
								}
							}
						},
						{
							title: "Превращение и некромантия",
							key: "trans_nekro",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Разрушительная энергия твоего заклинания некромантии разрушают все ткани твоей ведущей руки; она остается полностью рабочей, но становится скелетной",
										"Ты успешно превращаешься в выбранную животную форму; полностью, за исключением твоих ног…",
										"Неконтролируемая сила некромантии вдыхает жизнь в твою тень и дарит ей свободу. Тень ненавидит тебя за все те годы, которые ты держал ее в заточении",
										"Ни одна твоя вещь не превращается вместе с тобой",
										"Случайная вспышка энергии некромантии оживляет ближайший труп, и он атакует тебя",
										"Твое заклинание превращения трансформирует твоего врага во что-то еще более мощное",
										"Ты превращаешься во что-то намного меньшее (или большее) размером, чем планировал (или чем нужно)",
										"Использование некромантии затуманивает твой взор и теперь ты видишь все гниющим и разлагающимся",
										"Твоя попытка трансформировать что-то или кого-то просто делает его прозрачным (но не невидимым)",
										"Из-за того, что ты пропускаешь через себя так много энергии некромантии, ты на некоторое время становишься невосприимчив к любой форме исцеления, естественной или магической"
									]
								}
							}
						},
						{
							title: "Предсказание, зачарование и иллюзии",
							key: "enchant",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Ты предвидишь, что твоя партия обернется против тебя и убьет тебя в самом ближайшем будущем",
										"Не твоя цель, а ты сам становишься околдованным и очарованным",
										"В течение следующих нескольких часов ты и твои союзники будут видеть всякие незначительные иллюзии",
										"Непредусмотренная цель влюбляется в тебя, и к тому же очень ревнует",
										"Вызванная заклинанием иллюзия на несколько часов становится реальной",
										"Из-за своего заклинания ты полностью теряешь воспоминания о двух предыдущих днях",
										"Гадание показывает, что результат твоих действий будет благоприятным; это полная противоположность тому, что произойдет на самом деле",
										"Энергетические отголоски твоих заклинаний очарования заставляют людей вокруг обращать на тебя внимание и относиться к тебе как к знаменитости; назойливые поклонники и внимание прессы прилагается!",
										"К сожалению, ты единственный, кто может видеть иллюзию, которую ты только что создал",
										"Полезный дух, с которым ты обычно разговариваешь во время гадания, изгнан и заменен на того, который чрезвычайно враждебен по отношению к тебе"
									]
								}
							}
						},
						{
							title: "Ритуальная магия, магия призыва и магические предметы",
							key: "artif",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Стоит тебе завершить призыв, как ты обнаруживаешь себя внутри магического круга в домашнем плане того существа, которое ты пытался вызвать",
										"Все оставшиеся заряды в твоем предмете взрываются, распространяя вокруг связанные с ними эффекты, уничтожая предмет и нанося вам значительный урон",
										"Немного неправильно произнесенное слово приводит к тому, что твой ритуал имеет совершенно противоположный эффект",
										"Магия из твоего предмета перезаряжает один из предметов противника",
										"Неконтролируемый всплеск энергии во время ритуала на несколько часов лишает тебя способности колдовать",
										"Магическая энергия просачивается из поврежденного волшебного предмета, что приводит к опасным последствиям для тех, кто использует или переносит предмет",
										"Твой призыв не удался, но сущности, которых ты пытался вызвать, теперь считают тебя свой целью",
										"Твое магическое оружие взрывается, как волшебная ядерная бомба, повреждая предметы и существ поблизости, включая тебя",
										"Твой ритуал работает, однако ты и все, кто был рядом, светятся ярким фиолетовым светом в течение суток или около того",
										"Призванное тобой существо выходит из-под контроля и теперь способно действовать по своему усмотрению"
									]
								}
							}
						},
						{
							title: "Превращение друида",
							key: "druid",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Ты превратился не в то животное, которое хотел",
										"Пока ты в форме животного, ты не понимаешь человечью речь",
										"Ты превратился в слабую / увечную особь выбранного вида",
										"Ты превратился, в кого хотел, но получаешь бесполезные или нелепые ходы",
										"Из-за разницы в восприятии человека и животного ты какое-то время плохо ориентируешься в происходящем. Тебе нужно время, чтобы привыкнуть",
										"Ты жутко голоден и должен съесть то, что ест выбранное животное",
										"Ты не может противиться животным инстинктам (например, должен бежать за палкой в форме собаки или помимо своей воли гонишься за добычей)",
										"Ты должен отыграть типичные повадки выбранного зверя",
										"Ты превратился в «странную» форму: неправильный окрас, чужие рога и т.д.",
										"Ты превратился не до конца и сохраняешь человечьи черты или даже части тела",
										"Ты превратился, в кого хотел, но после возращения в обычную форму на некоторое время сохраняешь черты зверя (рога, уши, копыта, раздвоенный язык, чешую и так далее)",
										"Из-за частых превращений тебя на некоторое время «заклинивает» в форме животного",
										"Из-за частых превращений ты превращаешься в жуткую химеру из разных звериных частей",
										"Твои вещи не превращаются с тобой и просто падают на пол рядом",
										"Ты превращаешься в кого хотел, но когда выйдешь из формы зверя, твои вещи не будут надетыми на тебя",
										"Ты превращаешься во что-то намного меньшее (или большее) размером, чем планировал (или чем нужно)",
										"Ты превращаешься в детеныша того зверя, которое выбрал (вплоть до яйца, куколки или головастика",
										"Ты превратился, в кого хотел, но следующее твое превращение сделает тебя этим же животным, вне зависимости от твоего желания",
										"В форме зверя у тебя все лапы левые. И задние",
										"Сразу после превращения ты встречаешься с чем-то, что чрезвычайно пугает зверей выбранного вида"
									]
								}
							}
						},
					]
				},
				{
					title: "Применение навыков",
					key: "skills",
					color: "",
					ico: "",
					sub: [
						{
							title: "Взлом замков и обезвреживание ловушек ",
							key: "lock_hack",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Твой рукав попадает в шестерни механизма, который ты пытаешься деактивировать, и запускает его. Это удерживает тебя на месте, а твоя красивая рубашка превращается в рубище",
										"Твои отмычки ломаются и заклинивают механизм, так что теперь замок невозможно вскрыть",
										"Последние цилиндры замка почти на месте, но вдруг из-за угла появляются стражники и атакую тебя и твоих союзников",
										"Внутренний механизм ловушки взрывается, разбрасывая вокруг шестерни, винты и металлическую шрапнель! Ты избегаешь худшего исхода, но твои союзники ранены «сверхскоростными» деталями",
										"Хорошая новость: ты успешно взломал замок. Плохая новость: ты успешно обнаружил ловушку",
										"Как только ты окончательно вскрываешь замок, ты понимаешь, что все его детали покрыты чертовски неприятным контактным ядом",
										"Заклинивший механизм внезапно отщелкивается, и 10-сантиметровая латунная трубка проходит сквозь твою руку. Надеюсь, это не ведущая твоя рука!",
										"Тебе удалось обезвредить ловушку только на время. Последний союзник, который пройдет через нее, получит полный урон",
										"Заклинание, наложенное на замок, нагревает его. Как только ты начинаешь взламывать его, ты получаешь ожоги, а ведь даже четверть дела не сделано!",
										"Чтобы дотянуться до механизма, ты должен протянуть всю руку в трубу с лезвием. Что может пойти не так?"
									]
								}
							}
						},
						{
							title: "Скрытность, Восприятие и Наблюдение",
							key: "stealth",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Ты сразу понимаешь, какая из мраморных плит пола скрывает ловушку, а какая совершенно безопасна",
										"Ты почти прошел мимо охранника, но тут рыхлый камень сдвигается, издавая скрежещущий звук и предупреждая охранника",
										"Растения безвредны и безопасны для здоровья, если их съесть",
										"Враг, которому ты и твои союзники собирались устроить засаду, оказывается ловко замаскированным манекеном. Вы дали реальным врагам достаточно времени, чтобы подготовить внезапное нападение",
										"Да не о чем беспокоиться, это просто ветер шелестит осенними листьями...", 
										"Ты стоишь неподвижно в тени, когда враги проходят мимо. И тут ты чувствуешь, как что-то ползет по твоей штанине",
										"Ты уверен, что вор использовал пароль «спелый гранат»",
										"«Ты уверен? Не больно-то она похожа на герцогиню, если, конечно, она не подрабатывает проституткой!»",
										"Они выглядят как типичная группа посетителей таверны: пьют, едят и разговаривают друг с другом",
										"Цель, за которой ты следишь, похоже, не ощущает твоего присутствия"
									]
								}
							}
						},
						{
							title: "Сила, выносливость и атлетика",
							key: "strength",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Ты направляешь свой вес вслед за броском, но твое плечо отзывается сильной болью и выходит из сустава",
										"Не слишком удачный прыжок: ты не смог достать до нужного места, и теперь висишь на узком выступе, цепляясь пальцами из последних сил",
										"Тебе почти удался удушающий захват, но из-за ловкого маневра противника вы меняетесь ролями, и вот уже ты на грани обморока",
										"Несколько прогнивших половиц проваливаются, и ты застреваешь по пояс в полу, болтая ногами в подполе",
										"Оказывается, у тебя сильная аллергия на этот тип зелья!",
										"Откуда этот звук рвущейся плоти? Это было твое колено!",
										"Ты пробиваешь зарешеченную дверь и тут же падаешь в яму-ловушку с обратной стороны",
										"Недели приключений отзываются в твоем теле ознобом, приступами кашля и сильным насморком, и это мешает всему, что ты делаешь",
										"Твоя демонстрация силы никого не впечатлила, потому что ты при этом порвал промежность штанов",
										"Уступ, с которого ты прыгаешь, проваливается, как только ты отталкиваешься, и ты, кувыркаясь, летишь вниз"
									]
								}
							}
						},
						{
							title: "Акробатика, скорость и координация",
							key: "dester",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"То, что должно было быть изящным маневром, приводит к тому, что ты неожиданно для себя садишься на шпагат, растягиваешь пах и выпадаешь из реальности на несколько мгновений",
										"Вместо того, чтобы изящно уклоняться от опасности, ты оказываешься прямо у нее на пути",
										"Твое непоследовательное петляние приводит тебя прямо в ловушку",
										"Когда ты пробираешься через опасный выступ, внезапный чих, к сожалению, нарушает твой баланс",
										"Твоя попытка ловко освободиться из пут приводит к тому, что они еще больше затягиваются",
										"Ты спотыкаешься и скользишь, но, к счастью, успеваешь схватить болтающуюся веревку, чтобы прервать падение. К сожалению, из-за трения ты сжигаешь всю кожу с ладоней",
										"Когда ты пытаешься проскочить мимо существа, оно использует свой массивный хвост, чтобы ударить тебя и отправить в полет, как детскую игрушку",
										"Ты почти догнал своего убегающего врага, но стоит тебе завернуть за угол, как ты столкнешься с его хорошо вооруженными союзниками",
										"Ты успешно защищаешься от арбалетного болта, однако снаряд пробивает твой щит и проникает в руку, скрепляя их (щит и руку) вместе",
										"Земля гораздо более скользкая, чем ты думал. Последнее, что видят твои союзники, прежде чем ты соскользнешь в пропасть — твои размахивающие руки"
									]
								}
							}
						},
						{
							title: "Знания, воля и проницательность",
							key: "intel",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"То, что ты считал уязвимостью своего врага, оказывается полезным для него",
										"У тебя по-настоящему хорошее предчувствие относительно этих людях. Определенно, они честны и искренни",
										"Твое знание пантеона немного не соответствует истине. На самом деле, твое подношение богине — серьезное оскорбление. Ее месть будет быстрой.",
										"«Они будут уважать нас только в том случае, если мы все будем агрессивны, будем смотреть им прямо в глаза и показывать зубы!»",
										"Мужество совершенно подводит тебя, страх парализует тебя. Ты роняешь то, что держишь в руках, и начинаешь терять сознание перед лицом невообразимого ужаса (по крайней мере, чего-то ужасного для тебя)",
										"Ты практически на 100% уверен, что древняя надпись переводится как «священный храм богини сострадания и милосердия». Практически на 100%",
										"Эти большие животные — травоядные, вам не о чем беспокоиться",
										"Что-то безобидное и обыкновенное совершенно пугает тебя (возможно, клоуны?)",
										"Он блефует!",
										"Первобытное племя должно предложить вам кров и хорошую еду, ну или, по крайней мере, сделать нечто типа укладывания вас куда-то и поедания чего-то"
									]
								}
							}
						},
						{
							title: "Провалы на «Покопаться в памяти» и «Изучить обстановку»",
							key: "lore",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Рассказать что-то неприятное о том, что исследуется.| Хотел вспомнить про слабые места тарраски? У тарраски нет слабых мест! Приглядывался, кто главный в этом бальном зале? Да, как ты и боялся, твой заклятый враг герцог Дюпон! Искал ловушки? Нашёл! Эта комната — чертов ловушечный склад. И у тебя нет ни малейшей идеи, как их обезвредить",
										"Перенаправить вопрос игрокам и извратить их ответ.| Хотел вспомнить про слабые места тарраски? А тебе что говорили в академии? Глаза? Так вот, все, кроме глаз, покрыто костяными пластинами толщиной с ногу, а глаза у неё размером не больше свиных, и они на высоте в полтора человеческих роста, как ты собираешься до них достать?",
										"Пока ты изучаешь кого-то, сам оказываешься замеченным. |Приглядывался, кто главный в этом бальном зале? Да, как ты и боялся, твой заклятый враг герцог Дюпон! Он уже тебя заметил, и шепнул несколько слов пажу, который убежал в сторону стражи у дверей. Подслушивал под дверью, есть ли там кто? Телохранитель распахивает дверь, ты получаешь удар медной ручкой по уху и падаешь на спину в углу. Выглядываешь из окна? Я предупреждал, что оно под обстрелом.",
										"Пропустил очевидное. |Искал ловушки? Надо было сначала посмотреть наверх, на потолок, откуда на тебя сейчас падает целая стая пауков",
										"Промедлил. |Приглядывался, кто главный в этом бальном зале? Пока ты это делал, епископ, с которым ты хотел поговорить, засобирался домой, он уже выходит, что ты делаешь? Летишь к нему через весь зал, расталкивая аристократов?",
										"Отделился.| Пока ты ходил в округе и искал следы, на тебя напали/на остальных напали",
										"Проблема в процессе. |Залезал на высокое дерево, чтобы осмотреть окрестности? Ну, ветка, на который ты сейчас, оказалась подгнившей, трещит под тобой, что ты делаешь? Тебе пришлось забить несколько костылей в скалу, чтобы пробраться, вычеркни 1 использование Набора Авантюриста. ",
										"Ранее незамеченная проблема. |Смотришь в подзорную трубу? Только оборванный ремешок болтается, должно быть, ты потерял её, когда уползал от логова тролля. Хочешь вернуться посмотреть?",
										"Просто неудача. |Хотел вспомнить про слабые места тарраски? Хоть убей, не помнишь. Приглядывался, кто главный в этом бальном зале? Ты же рейнджер, откуда ты знаешь, ты в первый раз на балу? Искал ловушки? Могут быть где угодно.",
										"Очевидное вранье.| Хотел вспомнить про слабые места тарраски? Ты почему-то считаешь, что нужно подобраться к ней под брюхо. Присматривался, чей это герб на плаще? Это твой союзник, расскажи ему все.",
										"Настоящее вранье. |Присматривался, чей это герб на плаще? Это человек герцога, без сомнений, лучше избавиться от него, пока он не повернулся к тебе лицом. *на самом деле это был единственный возможный союзник в стане врага, но это выяснится через месяц реального времени+ Вранье должно выглядеть, как провал. В примере выше кажется, что сложность в том, что перед тобой враг, в этом можно поверить.",
										"Ход за экраном. |Если в голову вообще ничего не лезет, можешь просто ответить на вопрос и сделать ход за экраном. Ну и конечно, часто можно сделать ход подземелья или фронта или даже показать Grim Portent."
									]
								}
							}
						}
					]
				},
			]
		},
		
		{
			title: "Беспощадное окружение",
			key: "environment",
			color: "",
			ico: "",
			sub: [
				{
					title: "Горы и лед",
					key: "mountains",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Когда вы вытаскиваете оружие и готовитесь к бою, вы понимаете, что низкий грохочущий звук, который вы слышите — это лавина, а не дикий зверь",
								"Уступ, который ты осторожно пересекаешь, внезапно обваливается, сбрасывая тебя в овраг",
								"Под твоими ногами с оглушительным треском возникает огромная трещина: лед сдвигается опасно и непредсказуемо",
								"Лед под вашими ногами раскалывается, и вы проваливаетесь в ледяную реку с мощным течением",
								"Крупный сильный снег делает путешествие чрезвычайно сложным и опасным",
								"Тропа, по которой вы идете, внезапно заканчивается на краю отвесного оврага, но продолжается на его противоположной стороне",
								"Внезапная метель оторвала тебя от остальной партии, теперь ты потерян и одинок",
								"Тропа, по которой вы шли, полностью погребена под ночной лавиной",
							]
						}
					}
				},
				{
					title: "Леса и джунгли",
					key: "forest",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Под листвой оказывается глубокая яма. Прежде чем ты поймешь, что произошло, ты с головой погружаешься в темноту",
								"Ты просыпаешься в ужасе: твое тело покрыто агрессивными муравьями! Они в твоей постели, в твоем снаряжении, они кусают тебя везде",
								"Когда ты идешь по стволам упавших деревьев, ты наступаешь на гнилое место, по пояс проваливаешься под кору и застреваешь. Ты чувствуешь, как что-то скользит по твоим ногам",
								"Вы защитились от грозы под кроной деревьев, но лишь до тех пор, пока молния не ударила в дерево, рядом с которым вы стоите",
								"Сильный ливень в горах поблизости вызывает наводнение в сухом русле ручья, по которому вы шли",
								"Разведывая вокруг, ты вдруг осознаешь, что понятия не имеешь, где остальная часть твоей партии",
								"Продвигаясь через густую листву, ты внезапно сталкиваешься с массивным спящим зверем",
								"Сильный ветер, проносящийся через верхушки деревьев, опрокидывает огромное дерево прямо на тебя",
							]
						}
					}
				},
				{
					title: "Болота и топи",
					key: "swamp",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Пробираясь по колено в болоте, ты слышишь металлический щелчок давно забытого медвежьего капкана, что лежит прямо под поверхностью",
								"Выйдя из мутной воды, ты обнаруживаешь странных пиявок, прикрепившихся к твоему телу. Они выделяют некротический химикат, который разъедает твою плоть",
								"Внезапно, без объяснения причин, мириады болотных звуков, к которым ты уже привык, прекращаются",
								"Мягкая и губчатая земля внезапно разверзается, и ты быстро погружаешься в зыбучие пески",
								"Ты понимаешь, что след, по которому ты шел, внезапно исчез, и обнаруживаешь себя рядом с логовом голодного зверя",
								"Большой рой жалящих насекомых окружает тебя, отвлекая и не давая сосредоточиться",
								"Твои преследователи приближаются, а вода, которая только что была по щиколотку, внезапно становится по грудь, и ты вынужден сильно замедлиться",
								"Густой туман поднимается от болота, уменьшая видимость до нуля и приглушая звук",
							]
						}
					}
				},
				{
					title: "Пустыни и пустоши",
					key: "wasteland",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Внезапный ветер вызывает ослепляющую песчаную бурю, которая полностью перекрывает видимость",
								"Жара невыносимая, нет ни ветерка, ни тени, а вода уже час как закончилась",
								"Высоко над твоей головой от стены каньона откалывается кусок скалы и летит на тебя",
								"Вы, наконец, прибываете в оазис, указанный на вашей карте, но, к сожалению, что-то загрязнило и испортило воду, и теперь она непригодна для потребления",
								"Сухой воздух и хлещущий ветер жгут глаза и уменьшают видимость почти до нуля",
								"С каждым шагом, который вы делаете через покрытую пеплом равнину, ядовитый пепел взвивается, затрудняя дыхание",
								"Соляная равнина, по которой ты шел, разъела все твое металлическое снаряжение",
								"Необычный ливень превратил сухой каньон, в котором вы находитесь, в зону наводнения",
							]
						}
					}
				},
				{
					title: "Подземелье",
					key: "dungeon",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Вибрации от ваших шагов высвобождают странные пахнущие споры от местных грибов, и у вас от них начинает кружиться голова",
								"Видимо, на поверхности идет сильный дождь, потому что подземелье начинает затапливаться водой",
								"Неожиданный порыв воздуха задувает все ваши факелы и фонари. Ой, а что это за рычащий звук?",
								"Из трещины в стене внезапно вырывается сильная струя горячего пара",
								"Из-за резких подземных толчков ты теряешь опору под ногами. Сверху летят камни и всякий сор",
								"Кипящая грязевая яма неподалеку внезапно извергается, разбрызгивая вокруг обжигающую горячую грязь",
								"В спешке ты теряешь опору на покрытых мхом скалах",
								"Внезапно часть стены поднимается и по полу разливается лава",
							]
						}
					}
				},
			]
		},
				
		{
			title: "Фабрика монстров",
			key: "frankenstein",
			color: "",
			ico: "",

			sub: [			
				{
					title: "Свойства",
					key: "props",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Несокрушимая сила:| +2 урона, мощный",
								"Навык в нападении:| бросайте урон 2 раза и выбирайте лучший ",
								"Навык в обороне:| +1 броня ",
								"Искусные удары:| проникающий +1 ",
								"Сверхъестественная выдержка:| +4 ОЗ ",
								"Обман и хитрость:| скрытное, запишите ход, связанный с грязными трюками ",
								"Полезная особенность вроде жабр или крыльев:| запишите особое свойство, отражающее адаптацию ",
								"Благосклонность богов:| божественное, +2 урона, или +2 ОЗ, или оба (на ваше усмотрение); добавьте в сокровища символ благосклонности божества (или богов) ",
								"Заклинания и магия:| волшебное, запишите ход под его заклинания; добавьте в сокровища загадочный предмет, возможно, магический ",
								"Его оружие внушает ужас и заметно сразу:| +2 урона ",
								"Атака позволяет удерживать других на расстоянии:| удар копья ",
								"Оружие является мелким и слабым:| уменьшите кубик урона на 1 шаг ",
								"Оружие может резать или пробивать металл:| месиво, +1 проникающее или +3, если оно рвёт железо на куски ",
								"Броня против этого оружия бесполезна (из-за магии, его размера, и т.п.): игнорирует броню ",
								"Оружие атакует на расстоянии (стрелами, заклинаниями или иными снарядами): близко, далеко или оба ",
								"Опасен не в бою:| коварный, уменьшите кубик урона на 1 шаг, запишите ход, отражающий его основную опасность ",
								"Стайный или в отряде, полагается на поддержку других:| организованный, запишите ход, призывающий подмогу ",
								"Обладает интеллектом, сравнимым с человеческим:| разумный ",
								"Активно защищает себя щитом или аналогом:| осторожный, броня +1 ",
								"Собирает нечто, что люди ценнят (золото, камни, тайны): запасливый ",
								"Не из этого мира:| планарный, запишите ход о применении знаний и мощи иных миров; добвьте в сокровища нечто не из этого мира ",
								"Его жизнь поддерживает нечто большее, чем просто биология:| +4 ОЗ ",
								"Был изготовлен кем-то:| искусственный, добавьте 1–2 хода, связанных с его конструкцией или назначением ",
								"Внешность неестественная или внушает ужас:| пугающий, запишите ход про то, что делает его столь страшным ",
								"Он (или его раса) — древний (старше людей, эльфов и гномов): увеличьте кубик урона на 1 шаг ",
								"Избегает насилия:| бросайте кубик урона дважды и берите меньший результат"
							]
						}
					},
				},
				{
					title: "Тактика",
					key: "tactics",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Устраивают засаду и атакуют внезапно",
								"Прячутся, пока герои не потеряют бдительность",
								"Используют исцеление и баффы",
								"Сбегают, когда преимущество не на их стороне",
								"Зовут подмогу",
								"Атакуют издалека и сбегают (их могут тут же сменить противники ближнего боя)",
								"Используют окружение как укрытие",
								"Заманивают игроков в ловушку, неудобную позицию, засаду",
								"Используют окружение для атаки: сбрасывают сверху камень, например",
								"Используют осадные орудия: льют на героев раскаленное масло, например",
								"Атакуют организованно: противники имеют «специализацию» (защитник, танк, стрелок, поддержка и т.д.) и используют синергию навыков"
							]
						}
					},
				},
				{
					title: "Ходы",
					key: "moves",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Держать кого-то, лишив дыхания",
								"Метнуть схваченное создание",
								"Поглотить неосторожную жертву",
								"Превратить землю в оружие",
								"Принять облик того, чьей плоти отведал",
								"Сбить с ног",
								"Использовать весь свой вес",
								"Собраться из частей",
								"Напустить туман",
								"Напасть из ночного неба",
								"Окружить жертву",
								"Призвать на помощь стаю",
								"Напустить тень",
								"Повредить броню или оружие",
								"Обернуть природу против врагов",
								"Вызвать медленное превращение жертвы в камень",
								"Двигаться с удивительной скоростью",
								"Позвать стаю",
								"Отравить",
								"Слиться с тенью",
								"Погрузить во тьму",
								"Затащить добычу в неровный туннель",
								"Вырваться из-под земли",
								"Заглотнуть целиком",
								"Заполнить разум чуждыми мыслями",
								"Обратить металл в ржавчину",
								"Изрыгнуть огонь",
								"Атаковать нескольких противников одновременно",
								"Вторгнуться в разум",
								"Причинить невероятную боль",
								"Сплести заклинание ненависти и злобы"
							]
						}
					},
				},
				{
					title: "Сокровища",
					key: "treasure",
					color: "",
					ico: "",
					data: {
						pre: "Бросайте кубика урона монстра, добавьте +d4 к броску, если монстр <i>властвует</i> над другими или <i>древний</i>. Если монстр <i>запасливый</i>, бросьте кубик дважды, возьмите лучший результат.",
						list: {
							meta: {								
								bShuffle: false,
								options: [
									{
										title: "Властвует/древний",
										checked: false,
										type: "checkbox",
										key: "offset_start",
										value: "1d4"
									},
									{
										title: "Запасливый",
										checked: false,
										type: "checkbox",
										key: "count",
										value: 2
									}
								]
							},
							data: [
								"Несколько монет, 2d8 или около того ",
								"Предмет, полезный в текущей ситуации ",
								"Приличная сумма монет, около 4d10 ",
								"Небольшой предмет (драгоценный камень, произведение искусства) значимой ценности, стоимостью до 2d10x10 монет, вес 0 ",
								"Незначительная волшебная безделушка ",
								"Полезная информация (в виде улик, заметок и т.п.) ",
								"Мешок с монетами, d4x100 или около того, 1 вес на 100 монет ",
								"Очень ценный небольшой предмет стоимостью 2d6х100, вес 0 ",
								"Сундук с золотыми монетами и ценностями, вес 1, цена 3d6х100 ",
								"Волшебный предмет или магический эффект ",
								"Несколько сумок с золотом на сумму около 2d4х100 монет ",
								"Символ власти (корона, знамя) стоимостью минимум 3d4х100 монет ",
								"Крупный предмет искусства ценой 4d4х100 монет, вес 1 ",
								"Уникальный предмет, стоимостью минимум 5d4х100 монет ",
								"Информация для изучения нового заклинания, бросьте ещё раз ",
								"Портал или тайный ход (или указание к нему), бросьте ещё раз ",
								"Нечто связанное с одним из персонажей, и бросьте ещё раз ",
								"Сокровищница: d10х1000 монет и d10х10 драгоценных камней стоимостью 2d6х100 каждый"
								
							]
						}
					},
				},							
				{
					title: "Слабости",
					key: "vulnerability",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								'Ядро: | Где-то в теле монстра (или где-то еще?) находится его "сердце", самая уязвимая точка',
								'Домосед: | Слаб вне привычной обстановки - обустроенного логова или привычной стихии',
								'Чистолюб: | Не выносит "грязь" - возможно в прямом, а может в переносном смысле',
								'Естественные враги: | Существуют другие создания (паразиты/хищники и т.д.), которых монстр боится',
								'Светобоязнь: | Не выносит света',
								'Бессеребренник: | Уязвим к серебру',
								'Уязвимость: | Возможно иные атаки не особо эффективны, или именно эти наносят больше урона. (хладное железо, огонь, кислота, святое слово и т.д.)',
								'Неуклюжий: | Если вывести из равновесия, то не сразу придет в себя',
								'Медлительный: | Атакует реже прочих',
								'Беспробудный: | Его сон ОЧЕНЬ крепок',
								'Теплолюбивый: | Впадает в стазис при низких температурах',
							]
						}
					},
				},
			]
		},
		
		{
			title: "Создание персонажей",
			key: "character_randoms",
			color: "",
			ico: "",

			sub: [			
				{
					title: "Инстинкты",
					key: "instinct",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Отомстить",
								"Нести благую весть",
								"Воссоединиться с любимым",
								"Заработать денег",
								"Заслужить прощение",
								"Изучить таинственное место",
								"Раскрыть тайную истину",
								"Найти утерянный предмет",
								"Убить ненавистного врага",
								"Захватить далёкую землю",
								"Исцелить болезнь",
								"Создать шедевр",
								"Выжить еще один день",
								"Добиться расположения",
								"Кому-то что-то доказать",
								"Стать умнее, быстрее, сильнее",
								"Исцелить старую рану",
								"Окончательно сокрушить зло",
								"Скрыт постыдный факт",
								"Проповедовать",
								"Нести страдание",
								"Показать свою ценность",
								"Возвыситься в иерархии",
								"Получить похвалу",
								"Открыть истину",
								"Выиграть ставку",
								"Избежать обязательств",
								"Спихнуть на кого-то свое грязное дело",
								"Украсть нечто ценное",
								"Бросить вредную привычку",
								"Совершить злодеяние",
								"Добиться признания",
								"Накапливать власть",
								"Спасти кого-то от монстра",
								"Обучить",
								"Осесть",
								"Раздобыть еще сокровищ",
								"Защищать закон",
								"Исследовать",
								"Пожирать",
								"Возродить доброе имя семьи",
								"Прожить спокойную жизнь",
								"Помочь другим",
								"Искупить вину",
								"Доказать свою ценность",
								"Добиться чести",
								"Расширить свои владения",
								"Получить титул",
								"Покинуть общество",
								"Сбежать",
								"Пировать",
								"Вернуться домой",
								"Служить",
								"Вернуть отнятое",
								"Сделать, что необходимо",
								"Быть героем",
								"Избежать внимания",
								"Помочь члену семьи",
								"В совершенстве овладеть навыком",
								"Путешествовать",
								"Преодолеть недостаток",
								"Играть в игру",
								"Основать династию",
								"Улучшить королевство",
								"Уйти в отставку",
								"Вернуть потерянные воспоминания",
								"Сражаться",
								"Стать кошмаром для преступников",
								"Выращивать драконов",
								"Оправдать ожидания",
								"Стать другим",
								"Совершить невозможное",
								"Быть упомянутым в песнях",
								"Стать забытым",
								"Найти истинную любовь",
								"Потерять рассудок",
								"Потакать своим порокам",
								"Извлечь всё возможное",
								"Найти того единственного",
								"Уничтожить артефакт",
								"Показать им всем",
								"Принести бесконечное лето",
								"Летать",
								"Найти шестипалого человека",
								"Пробудить спящих древних",
								"Развлекать",
								"Следовать приказам",
								"Славно умереть",
								"Осторожничать",
								"Проявлять",
								"Попытаться всё не испортить",
								"Раскрыть прошлое",
								"Идти туда, где не ступала нога человека",
								"Творить добро",
								"Стать чудовищем",
								"Проливать кровь",
								"Жить вечно",
								"Охотиться на опаснейшую дичь",
								"Ненавидеть",
								"Убежать"
							]
						}
					},
				},
				{
					title: "Средства",
					key: "way",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Преступные связи",
								"Могучие мускулы",
								"Владение видом оружия",
								"Знахарство",
								"Обширное знание местности",
								"Благородная кровь",
								"Уникальный предмет",
								"Особая судьба",
								"Уникальная перспектива",
								"Скрытые знания",
								"Осведомлённость в магии",
								"Необычное происхождение",
								"Политический рычаг",
								"Связь с монстром",
								"Тайна",
								"Истинная любовь",
								"Невинное сердце",
								"План идеального преступления",
								"Билет в рай в один конец",
								"Таинственная руда",
								"Деньги, деньги, деньги",
								"Благословение богов",
								"Иммунитет от закона",
								"Пророчество",
								"Тайные техники боевых искусств",
								"Кольцо силы",
								"Необходимая сумка с картошкой",
								"Сердце",
								"Укреплённая позиция",
								"Знание законодательства",
								"Языки",
								"Внимательный взор",
								"Выносливость",
								"Безопасное место",
								"Видения",
								"Прекрасный разум",
								"Чистый голос",
								"Ошеломляющая красота",
								"Навязчивая мелодия",
								"Изобретение",
								"Пекарство",
								"Пивоварение",
								"Плавка",
								"Столярное дело",
								"Искусство писателя",
								"Неуязвимость к огню",
								"Поваренное мастерство",
								"Рассказ историй",
								"Крысоловство",
								"Обман",
								"Абсолютная неприметность",
								"Сводящая с ума сексуальность",
								"Неопределимая крутость",
								"Умение вязать узлы",
								"Колёса из полированной стали",
								"Волшебный ковёр",
								"Неистощимые идеи",
								"Устойчивость",
								"Запас еды",
								"Скрытый путь",
								"Благочестие",
								"Устойчивость к болезням",
								"Библиотека",
								"Серебряный язык",
								"Происхождение",
								"Врождённое заклинание",
								"Равновесие",
								"Души",
								"Быстрота",
								"Понятие о плохом и хорошем",
								"Определённость",
								"Внимание к деталям",
								"Героическая жертвенность",
								"Чувство направления",
								"Большая идея",
								"Скрытый вход в город",
								"Любовь кого-то могущественного",
								"Нерушимая верность",
								"Экзотический фрукт",
								"Яды",
								"Идеальная память",
								"Знание птичьего языка",
								"Ключ к важной двери",
								"Умение работать по металлу",
								"Таинственные покровители",
								"Стальные нервы",
								"Блеф",
								"Дрессированный волк",
								"Вновь обретённый давно потерянный родственник",
								"Стрела с вашим именем",
								"Истинное имя",
								"Удача",
								"Доброта",
								"Необычные татуировки",
								"Величественная борода",
								"Книга на загадочном языке",
								"Внимание магических сил",
								"Безграничная сила",
								"Иллюзии величия",
								"Легкая поступь, попутный ветер"
							]
						}
					},
				},
				{
					title: "Имена",
					key: "names",
					color: "",
					ico: "",
					data: {
					list: {
							data: [
								"Фингар",
								"Хивн",
								"Одноглазый",
								"Альхоро",
								"Арлон",
								"Ев",
								"Скользкий",
								"Йокат",
								"Эвинг",
								"Лим",
								"Пой",
								"Майло",
								"Дерилл",
								"Медлин",
								"Астрафель",
								"Дэльвин",
								"Фелиана",
								"Дамарра",
								"Систранель",
								"Пендрелл",
								"Мелиландра",
								"Даголир",
								"Болдрик",
								"Лина",
								"Данвик",
								"Виллем",
								"Эдвин",
								"Флориан",
								"Серафина",
								"Куорра",
								"Шарлотта",
								"Лили",
								"Рамонд",
								"Кассандра",
								"Дурга",
								"Эльфар",
								"Герда",
								"Рургош",
								"Бьёрн",
								"Драммонд",
								"Хельга",
								"Сигруна",
								"Фрея",
								"Уэсли",
								"Бринтон",
								"Йон",
								"Сара",
								"Хэвторн",
								"Элиза",
								"Кларк",
								"Ленор",
								"Пётр",
								"Орхидея",
								"Кармайн",
								"Гикоракс",
								"Этанви",
								"Синатель",
								"Деманор",
								"Менолир",
								"Мифралан",
								"Тэрос",
								"Эгор",
								"Таннер",
								"Данстен",
								"Роза",
								"Айви",
								"Робард",
								"Маб",
								"Чертополох",
								"Пак",
								"Анна",
								"Сера",
								"Элана",
								"Обелис",
								"Герран",
								"Сила",
								"Анданна",
								"Сиобан",
								"Азиз",
								"Пелин",
								"Сибел",
								"Нильс",
								"Вей",
								"Озрук",
								"Суртр",
								"Брунгильда",
								"Анника",
								"Янос",
								"Грета",
								"Дим",
								"Рундриг",
								"Ярл",
								"Ксоток",
								"Элохир",
								"Шарасет",
								"Хасрит",
								"Шеварал",
								"Кадей",
								"Эльдар",
								"Кифрасет",
								"Фелиан",
								"Финнегат",
								"Оливия",
								"Рэндольф",
								"Бартлби",
								"Обри",
								"Болдуин",
								"Бекка",
								"Хок",
								"Рудигер",
								"Грегор",
								"Брианна",
								"Уолтон"
								
							]
						}
					},
				},
				{
					title: "Стремления",
					key: "drives",
					color: "",
					ico: "",
					source: "Данные взяты в паблике <a href='https://vk.com/@irontales-alternativa-mirovozzreniu-zhiznennye-prioritety'>Железные Сказки</a>",
					data: {
						pre: "Взято из хака <b>Inverse World</b>, в котором мировозрение заменено на жизненные приоритеты. Персонаж получает опыт в конце сесии, если хотя бы раз действовал согласно стремлению. Если ни разу не действовал, может его сменить, объяеснив, чем вызвана такая перемена.",
						list: {
							data: [
								"Жажда риска. | Подвергните союзника опасности, выкинув рискованный и неожиданный финт.",
								"Признание и благодарность. | Сподвигните кого-либо признать ваши заслуги и оценить приложенные усилия.",
								"Амбиции и сила. | Поставьте других в опасное положение, преследуя свою выгоду.",
								"Бунтарство. | Нарушьте общепринятый порядок.",
								"Глоток свободы. | Победите тирана или поработителя.",
								"Превосходство. | Нанесите урон тому, кто стоит у вас на пути.",
								"Доброта и сострадание. | Проявите милосердие.",
								"Самовыражение. | Принесите жертву ради искусства.",
								"Неподчинение. | Нарушьте закон или откажитесь подчиняться властям.",
								"Долг и ответственность. | Возьмите на себя ответственность за действия другого.",
								"Миссионерство. | Обратите другого в свою веру.",
								"Исследование мира. | Отправьтесь туда, где никогда не были раньше, и исследуйте это место.",
								"Дружба. | Помогите другу в час нужды.",
								"Вина и искупление. | Исправьте сделанную ошибку, вашу или чью-то другую.",
								"Предательство. | Воспользуйтесь доверием другого.",
								"Мир в душе. | Разрешите конфликт без кровопролития.",
								"Закон и порядок. | Отдайте преступника в руки правосудия.",
								"Богатство. | Рискните ради обретения богатства.",
								"Личная свобода. | Избавьтесь от конфликта, избежав его.",
								"Правда. | Откройте скрываемую правду или разоблачите злоупотребление.",
								"Геройство. | Бросьтесь навстречу опасности, чтобы защитить кого-то или что-то важное.",
								"Разрушение. | Разрушьте что-то прекрасное.",
								"Эгоизм. | Позаботьтесь прежде всего о себе, а уже потом – о нуждах других.",
								"Придти и победить. | Поведите других в бой за правое дело.",
								"Хвастовство. | Впечатлите другого вашим богатством или способностями.",
								"Романтика и приключения. | Защитите честь друга и любимого.",
								"Месть. | Победите противника, с которым у вас личные счёты.",
								"Правосудие вигиланта. | Заставьте заплатить за совершённые преступления здесь и сейчас.",
								"Вместе мы выстоим. | Защитите союзника от чего-то или не дайте принять ему неверного решения.",
								"В чём правда? | Отстаивайте то, во что верите.",
								"Поклонение божеству. | Действуйте в соответствии с принципами божества."
							]
						}
					},
				},
			]
		},
		
		{
			title: "Завязки",
			key: "starts",
			color: "",
			ico: "",
			

			sub: [			
				{
					title: "Стартовые вопросы",
					key: "start_questions",
					color: "",
					ico: "",
					source: "Автор: Джош Эрвин, 2018. Перевод: Дмитрий Новиков, 2018.| На документ распространяются условия лицензии: Creative Commons Attribution Non-Commercial Share Alike 3.0 | <a href='http://creativecommons.org/licenses/by-nc-sa/3.0/us/'>http://creativecommons.org/licenses/by-nc-sa/3.0/us/</a> | Взято отсюда: <a href='https://docs.google.com/document/d/14Ta-fv7njYB26UnFKWxt8YzrC6R1jbEsND7WqMyNV2A/edit'>https://docs.google.com/document/d/14Ta-fv7njYB26UnFKWxt8YzrC6R1jbEsND7WqMyNV2A/edit</a>",
					sub: [	
						{
							title: "Варвар",
							key: "barbarian",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Почему обряды и ритуалы богов твоей родины вне закона в этих землях?",
										"Какое великое проклятие тяготеет над твоим народом? Что в этих землях, по мнению Старейшин, может быть единственным способом покончить с проклятием?",
										"Когда ты проходил через обряд инициации, ты выпил галлюциногенный отвар. Тебе было ниспослано видение человека, места и предмета. Что это было за видение?",
										"Ты единственный из своего народа, кто смог убить великое чудовище. Опиши его. Кто верит, что странный узор из шрамов, оставленных его когтями, делает тебя Избранным?",
										"Кто из твоих спутников проявляет силу, которую твой народ считает запретной? Когда придет время, как ты убедишься в том, что этот человек больше никогда не воспользуется этой силой?",
										"Они пришли и вырезали все твое племя. Убили всю твою семью. Похитили твою единственную любовь. Кто они, и как ты сумел выследить их здесь?",
										"Ты впервые встретил одного из своих спутников, когда он спас тебя от разъяренной толпы. Кому ты теперь обязан жизнью? Почему толпа так хотела убить тебя?",
										"Твой старший брат уехал в эти земли, когда ты был еще ребенком. Где, согласно слухам, он встретил ужасную смерть, и кто тот подлый убийца, который теперь носит наследное оружие твоего клана?",
										"Опиши тотемного духа твоего клана. Какое обещание данное ему Старейшинами, настало время исполнить? Почему ты единственный, кто может оплатить этот долг?"
									]
								}
							}
						},
						{
							title: "Бард",
							key: "bard",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Ты влюбился с первого взгляда. Кто твоя единственная истинная любовь? Какие кажущиеся непреодолимыми обстоятельства разлучили вас?",
										"После одного из твоих выступлений у тебя появились могущественные враги. Кто они и что их так сильно разъярило?",
										"Откуда ты был изгнан под страхом смерти? Почему для тебя жизненно важно вернуться туда как можно скорее?",
										"Кого из легендарных героев ты разыскиваешь, желая исполнить посвященную ему балладу твоего авторства? О чем говорится в той части баллады, которая неизбежно приведет его в бешенство?",
										"Один из твоих спутников находит твоё жизнелюбие невероятно раздражающим. Кто это? Что ты собираешься предпринять, чтобы изменить его мнение о тебе?",
										"Все говорят, что у тебя ангельский голос. Они почти угадали. Как ты собираешься избежать гнева существа, чей голос ты похитил?",
										"Ты отказался от традиционного семейного ремесла, чтобы странствовать по миру. Почему будет крайне неловко, если люди узнают, кто твои родственники, и чем они занимаются?",
										"Одно из твоих недавних выступлений покорило сердца многих. Что делает твоих новых поклонников настолько опасными, что ты вынужден избегать их благосклонности?",
										"Старый мудрый трубадур научил тебя всему, что ты знаешь. Кто это был? Что он потребует от тебя в уплату этого долга при вашей следующей встрече?",
										"Ты недавно обнаружил старую выцветшую надпись на своем музыкальном инструменте. О чём в ней говорится и почему она так пугает тебя?"
									]
								}
							}
						},
						{
							title: "Жрец",
							key: "cleric",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Какое божество, пантеон богов, или антропоморфное воплощение философской концепции даровало тебе твои силы? Какой аспект мироздания оно контролирует? Какому самому важному догмату твоей веры ты должен неуклонно следовать? ",
										"Какая сила или организация является величайшей угрозой для твоей секты? В чем причина этого конфликта?",
										"Каких жертв и подношений требует твоя вера, и как это подвергает тебя опасности?",
										"Какой важный религиозный праздник готовится отмечать твоя церковь? Чьей памяти он посвящен? Что угрожает сорвать празднования в этом году?",
										"Кто из твоих спутников знает постыдную тайну, которая может уничтожить тебя, если будет раскрыта? Почему ты боишься, что этому человеку больше нельзя доверять?",
										"Душа одного из твоих спутников в страшной опасности! Что ты планируешь делать, чтобы обратить его в свою веру?",
										"Какой порок (пьянство, азартные игры, разврат, склонность к преступлению) владел тобой прежде, чем ты обратился к вере? Что соблазняет тебя вновь вернуться на путь греха?",
										"Какому знаку предсказанного апокалипсиса ты только что стал свидетелем? Какое мрачное знамение ты теперь должен предотвратить?",
										"Ты обнаружил нечто, угрожающее самым основам твоей религии? Что это? Почему никто из заинтересованных лиц не хочет поверить тебе и попытаться решить эту проблему?",
										"Какое лицемерие или противоречие в учении или практиках твоей религии всегда беспокоили тебя? Что сейчас заставляет тебя противостоять этим сомнениям?"
									]
								}
							}
						},
						{
							title: "Друид",
							key: "druid",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Распространение порчи, поражающей растения и животных, долгое время сдерживали твои собратья-друиды. Опиши эту порчу. Что заставляет тебя верить, что вскоре она вернётся?",
										"Каждую ночь в своих снах ты видишь, как один из твоих спутников погибает странной смертью? Как это происходит? Что заставляет тебя думать, что эти сны скоро сбудутся?",
										"Твоя тень исчезла. Что это значит? Какая ужасная судьба ждёт тебя, если ты не вернешь ее к следующему новолунию?",
										"Какого врага или злодея ты должен убедить добровольно пожертвовать тебе свою кровь, чтобы предотвратить еще большее бедствие?",
										"В чем причина этой ужасной, “не по сезону” погоды и почему ты думаешь, что это твоя вина?",
										"Опиши ужасающих существ, которые преследуют вас? Кем они были, до того как были подвергнуты превращению?",
										"Почему все жители этой деревни должны немедленно покинуть её? Почему никто тебе в этом не верит?",
										"Как ты понял, что вы только что попали в другой мир?",
										"Какое необдуманное обещание ты дал Королеве Фей? Почему это не нравится одному из твоих спутников?",
										"Почему все деревья так злы на тебя?"
									]
								}
							}
						},
						{
							title: "Воин",
							key: "fighter",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Кого ты покинул, когда отправился на войну? Почему сейчас ты должен найти этого человека?",
										"Из-за чего началась недавняя война? Что сейчас дает возможность проигравшей стороне развязать конфликт заново?",
										"Какую клятву ты дал своему лучшему другу, умирающему от ран на поле боя? Почему сдержать это обещание так опасно?",
										"За какие зверства военного времени, ты чувствуешь себя ответственным? Что позволит тебе избавиться от чувства вины?",
										"Каких врагов ты нажил себе во время твоей последней битвы? Почему сейчас им предоставился шанс свершить свою месть?",
										"Кого из твоих спутников ты должен защитить? Что ужасного может случиться, если ты не справишься?",
										"Как зовут благородного господина, которому ты принес клятву верности? Почему ты боишься того, что он попросит тебя сделать?",
										"Кого ты однажды не смог спасти? Чего теперь хочет от тебя призрак этого человека?",
										"Какое легендарное потерянное оружие ты ищешь? Кто ещё считает, что оно должно принадлежать только ему?",
										"Как ты получил этот ужасный шрам? Почему после стольких лет он вдруг начал гореть и чесаться?"
									]
								}
							}
						},
						{
							title: "Паладин",
							key: "paladin",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Из какой семьи ты родом? Какие ужасные события прошлого преследуют твой род на протяжении нескольких поколений?",
										"Какие три обета ты принёс, вступая в рыцарский орден? Какое жуткое наказание ждёт тебя, когда твои соратники узнают, что ты нарушил один из них?",
										"Твое родимое пятно - знак некоего великого наследия. Что оно предвещает? Почему ты так хочешь избежать этой судьбы?",
										"Кто убил рыцаря, у которого ты служил оруженосцем? Что останавливает тебя от мести убийце?",
										"Кто из твоей семьи имеет на тебя зуб? Что дает ему сил причинять тебе так много проблем?",
										"Какое задание поручил тебе твой орден или твоя семья? Почему ты сомневаешься в их мудрости или порядочности?",
										"Кто из твоих спутников не выказывает тебе должного уважения, и как ты собираешься показать ему его место?",
										"Кем был предатель, к которому ты когда-то проявил милосердие? Почему сегодня ты сожалеешь об этом?",
										"Какой соблазн угрожает совратить тебя? Кто из твоих спутников, как ты боишься, может повести тебя к падению?",
										"Какими были первые слова, которые прошептал тебе голос из твоего наследного меча. Почему ты вздохнул с облегчением, поняв, что никто кроме тебя не слышит его?"
									]
								}
							}
						},
						{
							title: "Следопыт",
							key: "ranger",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Какая ужасная трагедия вынудила тебя покинуть цивилизованный мир? Какая вновь возникшая угроза заставила тебя вернуться?",
										"Это не первый твой питомец. Что заставляет тебя думать, что только что найденные тобой следы принадлежат твоему первому питомцу, хотя ты был уверен, что он погиб?",
										"Старый отшельник, живший в этих краях, всегда был добр к тебе. Почему его исчезновение так беспокоит тебя?",
										"Кто из твоих спутников напоминает важного для тебя человека, которого ты потерял? Почему ты боишься, что твой спутник повторит его судьбу?",
										"На этих мертвых телах видны следы когтей и зубов сверхъестественного существа, которого никогда прежде не видели в этих краях. Скажи ведущему, что это за существо, а он назовет тебе единственную вещь, которой его можно убить.",
										"Давным-давно в твоих путешествиях по далеким землям, ты нашел странный камень, стоящий на лесной поляне. Вскоре что-то ужасное случилось там. Теперь, когда ты нашел точно такой же монолит здесь, почему ты так напуган?",
										"Почему, как ты думаешь, ты получил приглашение на невообразимо официальный прием в особняк местного лорда? Что заставило тебя принять его? Кто из твоих спутников - единственный успеет научить тебя всем необходимым правилам этикета?",
										"Почему, когда ты впервые встретил одного из твоих спутников, ты тайно выслеживал его как добычу? Как он поступит, когда узнает об этом?",
										"Из леса исчезают живые существа, и в первую очередь - самые опасные. Куда, как ты думаешь, они исчезают? И почему твой ответ предвещает еще большую опасность?",
										"Что это за тварь только что встала на дыбы прямо за спиной одного из твоих спутников? Почему инстинктивное решение выстрелить в нее из лука было действительно ужасной идеей?"
									]
								}
							}
						},
						{
							title: "Вор",
							key: "rogue",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Почему за твою голову назначена немалая цена, и как так вышло, что ты по уши влюблен в ту, что назначила ее?",
										"Ты потерял свою семью, когда был еще ребенком. Почему так важно, чтобы ты нашел место их упокоения раньше, чем кто-либо другой?",
										"Назови величайшее сокровище во вселенной. Почему совершенно необходимо, чтобы ты украл его?",
										"Ты выглядишь в точности как сын местного лорда, пропавший много лет назад. Совпадение ли это?",
										"Кто из твоих спутников владеет чем-то, что необходимо тебе? Как ты планируешь украсть это так, чтобы никто не заметил?",
										"Кто сейчас сидит за решеткой, ожидая казни? Почему ты собираешься освободить его?",
										"Что было объявлено вне закона совсем недавно? Как ты собираешься использовать этот факт в своих интересах?",
										"Этот человек, обладающий значительной властью - настоящий деспот, которого необходимо свергнуть. Кто этот человек? Почему ты единственный, кто способен сделать это?",
										"Эта вещь выглядела достаточно заманчиво, и ты, не задумываясь, украл её. Однако теперь тебя преследует череда неудач. Что это за вещь? Почему ты не можешь просто избавиться от нее?",
										"Ты перерезал им горло много лет назад. Кто они такие? Почему они так рады снова тебя видеть?"
									]
								}
							}
						},
						{
							title: "Волшебник",
							key: "wisard",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Каким было первое заклинание, которое ты произнес? Почему его последствия до сих пор преследуют тебя?",
										"Ты связался с темными силами, чтобы получить часть своих знаний и сил. Что это были за силы и почему твои спутники никогда не должны узнать, какую цену ты заплатил?",
										"Использование некоторых заклинаний карается смертью? Перечисли эти заклинания. Ты сотворил одно из таких заклинаний, какое?",
										"Чтобы продвинуться дальше в твоих исследованиях, тебе необходимо нечто, что почти невозможно достать. Что это? Кто из твоих спутников единственный, кто может достать это для тебя?",
										"Никто, кроме тебя не может прочитать слова на древнем свитке. Что там написано на самом деле, и что ты рассказал остальным, когда лгал о его содержании?",
										"Оно свело твоего бывшего учителя с ума, когда он дерзнул попытаться контролировать его мощь, и ты считал, что оно убило его. Что это было? Что ты будешь делать теперь, когда твой старый учитель вернулся полностью подчиненный этим?",
										"Звёзды не врут - такое случается лишь один раз за целую вечность. Что должно произойти? Чем опасны попытки использовать это в своих целях?",
										"Что случилось со всеми детьми? Почему ты единственный, кто заметил это?",
										"Существуют многочисленные теории об устройстве других измерений, и ты изучил большинство из них. Скажи, основываясь на прочитанном, куда ведет этот светящийся портал? Чего хотят странные существа, только что возникшие в нем?",
										"Почему ты не хочешь прочитать заклинание, о котором  просит тебя этот человек? Почему отказать ему в этом будет очень опасно?"
									]
								}
							}
						},
						{
							title: "Испепелитель",
							key: "Immolator",
							color: "",
							ico: "",
							data: {
								list: {
									data: [
										"Кто научил тебя, как похитить пламя Великого дракона. Что ты задолжал этому человеку?",
										"Почему эти жуткие создания из железа и угля неотступно следуют за тобой? Почему ты не можешь просто сжечь их?",
										"Почему ты поднял восстание против местного правителя. Как вышло так, что твой бунт обернулся кровавой огненной расправой над невинными людьми.",
										"Кем была женщина, страсть к которой превратила твою кровь в жидкое пламя. Кто повинен в ее смерти?",
										"Ты случайно взглянул в глаза королю и узнал его страшную тайну. Кому ещё ты рассказал о ней?",
										"Что ужасного произойдет если в это полнолуние, ты не пожертвуешь пламени чью-то достойную жизнь? Кого ты нехотя выбрал следующей жертвой?",
										"Что ты пожертвовал Великому Пламени ради спасения своих близких? Почему эта жертва оказалась напрасна?",
										"Чье имя заставляет тебя дрожать от ненависти, теряя контроль над внутренним пламенем? Почему ты не можешь убить его?",
										"Какой ритуал ты должен совершить, чтобы феникс возродился из праха, который ты всегда носишь с собой? Почему ты жаждешь и боишься этого?",
										"Что пообещал тебе демон, шепчущий из пламени, в обмен на жизнь обычного беспризорника? Исполнил ли ты этот договор?"
									]
								}
							}
						}
						
					]
					
					
				},
					
				{
					title: "Предыстории",
					key: "background",
					color: "",
					ico: "",
					visible: false,
					data: {
						list: {
							data: [
								"Рейнджер| Моя зверушка разрушила родную деревню и я покинул родные места со своим вернум другом.",								
								"Вы унаследовали фамильный замок, находящийся в жутком упадке, а вместе с ним и огромную кучу долгов, на выплату которых денег у вас конечно же нет."
							]
						}
					},
				},
				{
					title: "Начало приключений",
					key: "kickstart",
					color: "",
					ico: "",
					source: "Значительная часть взята из <a href='https://imaginaria.ru/p/1k20-variantov-nachala-dlya-moduley.html'>поста Налии</a>",
					data: {
						pre: "Как вы в это вляпались? Когда все пошло не так? Что будете делать?",
						list: {
							data: [
								"Вы стоите перед дымящимися развалинами таверны, где должны были встретиться с таинственным заказчиком / другом",
								"Вы приходите в себя на небольшом пустынном островке с парой пальм. У вас есть бутылка рома, пистолет с одной пулей и мануал по вязанию веревок.",
								"Вы приходите в себя связанные в подвале, к вам с интересом принюхивается небольшая, но голодная стая крыс",
								"Вас кидают в подземелье с криком: \"Кто из вас, поганцев, первый выйдет из подземелья, тот и не виновен!\". Герои приземляются в узкой комнате, заполненной шипящими змеями. Из комнаты один очень узкий выход. В углах длинная палка, камень, жменька гречки и веревка.",
								"Вы стоите на эшафоте, \"Ваше последнее слово?\".",
								"Вы стоите у лагеря, едва схватив оружие, в вас с верхушки холма целятся орки.",
								"Вас всех выпихнули на арену, на трибунах бесится толпа, а громкий голос объявляет: \"Да начнется битва насмерть!\"",
								"Вы выходите из дверей поместья Герцога, который поручил вам крайне секретное задание и выдал значительное вознаграждение загодя. За закрывающимися дверьми слышите крики \"Герцог мертв! Это убийство!\" и приближающийся топот.",
								"Вы мчитесь по узкому скалистому коридору а вас нагоняет массивный каменный шар.",
								"Вы стоите по колено в хлюпающей жиже, в глубине которой что-то шевелится, стены начинают медленно сдвигаться, выход виднеется высоко в потолке.",
								"Кораблекрушение. Корабль, на котором вы плыли, потерпел крушение. Теперь вы на незнакомом берегу. Куда плыл корабль? Почему герои были на нём? Была ли естественной буря (или другой катаклизм, в котором он потерпел крушение)? Далеко ли до цивилизованных мест? Кто ещё выжил? Что из груза уцелело?",
								"Охрана каравана. Вы охраняли караван, идущий из пункта А в пункт Б. Цель достигнута, плата получена. В какой город (посёлок, крепость…) герои прибыли? Что интересного или странного произошло во время сопровождения каравана? Как это аукнется группе?",
								"Виновные в неведении. Вы охраняли торговца, держащего путь из пункта А в пункт Б. Но у входа в город его поймали на перевозке контрабандных товаров. Теперь вам предстоит доказать страже, что вы просто наёмники… И даже если докажете, то за работу вам не заплатят. В каком городе это произошло? Какая именно была контрабанда? Как это связано с тем, что происходит в регионе? Что глава стражи предложит героям сделать в обмен на снятие обвинений?",
								"Девица в беде. Вы спокойно сидите в таверне, когда к вам подсаживается перепуганная девушка. Она шёпотом умоляет помочь ей. В следующую минуту в таверну входят головорезы. разыскивающие эту девушку… Как выглядят головорезы? А девушка? Она жертва – или главный злодей? Есть ли среди посетителей таверны те, кто встанет на защиту девушки? А кто поможет головорезам?",
								"В осаде. Вы ночуете в стоящей на тракте таверне, когда на неё нападает банда разбойников (орков, вервольфов и так далее). Кто из посетителей (жителей) таверны может помочь героям? Кто будет паниковать? Кто встанет на сторону врагов? Почему нападавшие выбрали целью именно эту таверну?",
								"Спасаясь от непогоды. Ужасная метель (пыльная буря, ливень, наводнение…) заставляют вас спрятаться в одной и той же пещере. Выход заблокирован – но вглубь уходит проход. Почему герои находились в пути? Что странного в пещере? Что указывает на то, что в глубине пещеры прячется что-то интересное? И, главное, что это?",
								"Пленники. Герои приходят в себя в темнице, пойманные злыми культистами (гоблинами, гноллами…). Им предстоит спланировать и осуществить побег… И побыстрее. Кто поймал героев? Какой шанс для побега у них есть? Есть ли другие заключённые? Есть ли у них союзники – может, даже среди тюремщиков? Что за данж им предстоит пройти на пути к свободе?",
								"Умер и возрождён. Вы умерли! Но могущественный дух у врат смерти указывает героям обратный путь… И, конечно, хочет от вас услугу взамен. Что это за услуга? Этот дух – Смерть или кто-то другой? Какие дополнительные условия сделки поставит дух? Он даст героям что-то (или кого-то) в помощь? Или, наоборот, навесит дополнительные обязательства? Как он будет следит за выполнением условий сделки, и как покарает за их нарушение?",
								"Незабываемая ночка. Вы напились в таверне. Сильно. Очнулись в незнакомом месте где-то в глуши в обществе незнакомцев. Что же случилось вчера? Где и по какому поводу герои пили? В одной таверне или в разных? Что последнее они помнят? Какие указания на то, что произошло, они находят вокруг?",
								"В окружении. Страну раздирает война. Вы – в самом сердце боя. Ваш отряд окружён противниками… Где же орлы, которые должны всех спасти? Что за противник? Почему отряд героев попал в окружение? Кто или что их спасёт?",
								"Мы не рабы. Злой маг создаёт себе армию; он заманивает людей к себе в логово и порабощает их волю. Но по каким-то причинам на вас это заклинание не сработало… О чём он пока не знает. Зачем злодею армия? Что он поручит героям? Что полезного герои смогут узнать о злодее? Какими тёмными секретами овладеть? Злодей просто попытался подчинить их волю или оставил какие-то более явные шрамы – например, превратил в нежить?",
								"Нежить. Вы умерли… И восстали из мёртвых. Сейчас вы бледноваты, но по крайней мере не разваливаетесь на куски. Добро пожаловать в не-жизнь!Как герои умерли? Есть у героев соображения, почему они не смогли успокоиться с миром? Какими способностями нежити они обладают? Где в этом мире нежить способна безопасно существовать?",
								"Реинкарнация. Вас начали мучать воспоминания из прошлой жизни, и они заставили вас бросить всё и отправиться в путь. И вот вы встретились… Что за незаконченное дело заставило прошлые жизни подать голос? Какие отношения у героев были в прошлой жизни? Что (или кто) их преследует?",
								"Дом с привидениями. Вы получили (купили, получили в награду за службу?) участок земли и здание (таверну, крепость, поместье…). Но когда вы прибыли на место, выяснилось, что у них есть фундаментальный недостаток… Что за проблема с приобретением? Как герои его получили? Какая доля у каждого?",
								"Беженцы. Ваш родной дом разорён войной, и сейчас вы – не более чем беглецы, сбившиеся в компанию для безопасности. Вы пытаетесь добраться до спокойного места, но там вас не будут ждать с распростёртыми объятиями… Что за бедствие лишило героев дома? Какова цель их пути? Кто нападает на них, чтобы отобрать последнее? Следуют ли за героями люди, которых надо защищать?",
								"Звезда. С неба упало… Нечто. И сейчас вы идёте к кратеру, чтобы узнать подробности. Насколько сильными были бедствия от падения звезды? Кто отправил героев к звезде, или же они пошли по собственной инициативе? Что они найдут в кратере?",
								"Заключённые. Вас заковали в цепи и отправили в тюремную колонию подальше от метрополии. Вас ждёт выживание – и… покорение новых земель? Герои осуждены властным тираном – или за ним водятся реальные прегрешения? Насколько далеко находится колония от метрополии? Почему находится именно там –некий ценный ресурс? Просто дикая земля, которую нужно покорить?",
								"Эскорт. Вам нужно сопроводить из точки А в точку Б кого-то, кто выглядит совершенно невинно – ребёнка, например. Но когда на вас нападают, вы понимаете, что всё сложнее чем вам казалось… Кто нападает? Что ему нужно от охраняемого? Есть ли у охраняемого какие-то особые способности? Куда нужно довести охраняемого? Почему именно персонажам доверили это дело?",
								"Гладиаторы. Огромная тварь перед вами яростно ревёт. Зрители на трибунах ревут тоже. Толпа жаждет крови – вашей или этой твари. Как герои попали на гладиаторскую арену? Кто на трибунах будет особо впечатлён их победой? Для каких целей он их использует? Получите ли вы после этого боя свободу (и награду!) или вы на этой арене очень и очень надолго?",
								"Конец света. И это не пророчества безумных пророков. Катаклизм сотрясает ваш мир от основания до вершин. И вы пытаетесь это предотвратить… Или хотя бы выжить. В чём заключается конец света? Что нужно для того, чтобы его предотвратить? Известно ли это героям? И если да, то откуда?"
							]
						},
						
					},
				},
				{
					title: "Углубленное начало приключений",
					key: "extend_kickstart",
					color: "",
					ico: "",
					data: {
						pre: "Совместно заполните все пропуски и получите готовую завязку приключения.",
						list: {
							meta: {								
								bShuffle: false,
								bShowRandom: false,
							},
							data: [
								"Вы у входа в [НАЗВАНИЕ ОПАСНОГО ДАНЖА]",
								"Который расположен в [ФАНТАСТИЧЕСКОМ/СВЕРХЪЕСТЕСТВЕННОМ ОКРУЖЕНИИ]",
								"Вы пришли сюда по [ЗАДАНИЮ] выданнному [МОРАЛЬНО НЕОДНОЗНАЧНЫМ ПЕРСОНАЖЕМ]",
								"Удача отвернулась от вас из-за [ВНЕЗАПНОГО ПРЕПЯТСТВИЯ/ОБСТОЯТЕЛЬСТВА]",
								"И это серьезная проблема из-за [СУРОВЫХ ПОСЛЕДСТВИЙ]",
								"Что еще хуже, вы заметили признаки [НАДВИГАЮЩЕЙСЯ УГРОЗЫ]",
								"Вы не можете повернуть назад из-за [ЕЩЕ ОДНОЙ ВЕСКОЙ ПРИЧИНЫ]"
							]
						},
						
					},
				},
			]
		},
		
	]
		
	function randd(min, max) {
		return Math.floor(arguments.length > 1 ? (max - min + 1) * Math.random() + min : (min + 1) * Math.random());
	};
	function shuffle(o){		
		for(var j, x, k = o.length; k; j = Math.floor(Math.random() * k), x = o[--k], o[k] = o[j], o[j] = x);		
		return o;
	};

	/**
	* Returns roll results
	*
	* @param {string} sDie - string like 3d6+8 
	*/
	function parseDie(sDie){
		// nDn+n
		let oDice = sDie.match(/(\d+)?d(\d+)([+-]\d+)?/i); // 1,2,4,5
		
		let nDie = Number(oDice[2]);
		let nCount = Number(oDice[1]);
		let nMod = Number(oDice[3]);
		
		let nResult = 0;

		if(nDie) {
			nResult = randd(1,nDie);
		}
		if(nCount) {
			nResult = nResult*nCount;
		}
		if(nMod) {
			nResult = nResult+nMod;
		}
		return nResult;
	}


	function _setMoveLinks(){
		data.forEach(function(oEl){
			if(oEl.data && oEl.data.moves) {
				oEl.data.moves.forEach(function(oMove){
					_translateMove(oMove);						
				})
			} 
			if(oEl.sub && oEl.sub.length>0){
				oEl.sub.forEach(function(oSub){
					if(oSub.data && oSub.data.moves) {
						oSub.data.moves.forEach(function(oMove){
							_translateMove(oMove);						
						})
					} 
					if(oSub.sub) {
						oSub.sub.forEach(function(oSub){
							if(oSub.data && oSub.data.move && oSub.data.move.data) {
								_translateMove(oSub.data.move.data);
								// oSub.data.move.forEach(function(oMove){
									// _translateMove(oMove);						
								// })
							} 
						});
					}
				});
			}
		});
	}
	
	function _translateMove (oMove){
		if(oMove.results && oMove.results.length>0) {			
			oMove.results = oMove.results.map(res=>{
				if(res.links && res.links.length>0) {
					res.links = res.links.map(link=>{
						let sLinktitle = _getLinkTitle(link);
						//return `<a href="#${link}" class='move_link'>${sLinktitle}</a>`;
						return {
							href: "#"+link,
							title: sLinktitle
						}
					}) || [];
				}
				
				return res;
			})
		}
		return oMove;
	}
	
	function _getLinkTitle(sPath){
		let sRet = sPath;
		let aPath = sPath.split("|");
		let sTitle = "";
		switch(aPath.length) {
			case 3: 
				let aSections = data.filter(el=>el.sub && el.sub.length>0);
				for (let i=0; i<aSections.length; i++ && !sTitle) {
					if(aSections[i].sub) {
						let aSec = aSections[i].sub;
						for(let j=0; j<aSec.length; j++) {
							if(aSections[i].sub[j].sub) {
								let oSub = aSections[i].sub[j].sub.find(el=>el.key == aPath[2]);
								if(oSub) {
									sTitle = oSub.title;
									break
								}
							}
						}
					}
				}
				break;
			case 2: 
				let aSections2 = data.filter(el=>el.sub && el.sub.length>0);
				for (let i=0; i<aSections2.length; i++) {
					if(aSections2[i].sub) {
						let oSub2 = aSections2[i].sub.find(el=>el.key == aPath[1]);
						if(oSub2) {
							sTitle = oSub2.title;
						}
					}
				}
				break;;
			case 1: break;
		}
		
		return sTitle || sRet;
	}
	
	function _getSubs(oRoot, sLang='ru') {
		let aSections = [];

		if(oRoot && oRoot.sub) {
			oRoot.sub.forEach(function(oSection){
				if(oSection.visible==false) {
					return;
				}
				if(oSection[sLang]) {
					oSection = oSection[sLang];
				}
				let oSubNode = {};
				oSubNode.key = oSection.key;
				oSubNode.title = oSection.title;
				oSubNode.type = String(oSection.type).length>0? oSection.type :"";
				oSubNode.kind = String(oSection.kind).length>0? oSection.kind :"";
				if(oSection.data && oSection.data.item && oSection.data.item.data && oSection.data.item.data.level != undefined){
					oSubNode.level = oSection.data.item.data.level;
				}
				
				aSections.push(oSubNode);
			}); 
		}
		 
		return aSections;
	}
	function _getSectionsList(sRoot){
		let oRoot = data.find(el=>el.key == sRoot);
		return _getSubs(oRoot);
	}
	function _getSubsectionsList(sRoot, sSection){
		let oRoot = data.find(el=>el.key == sRoot);
		if(oRoot.sub) {
			let oSection = oRoot.sub.find(el=>el.key == sSection)
			return _getSubs(oSection);
		}
	}
	function _getSectionsMetadata(sRoot, sSection){
		let oRoot = data.find(el=>el.key == sRoot);
		let oMetadata = {};
		if(oRoot.group) {
			oMetadata.group = oRoot.group;
		}		
		return oMetadata;
	}
	function _getSubsectionsMetadata(sRoot, sSection){
		let oRoot = data.find(el=>el.key == sRoot);
		let oMetadata = {};
		if(oRoot.sub) {
			let oSection = oRoot.sub.find(el=>el.key == sSection);
			if(oSection.group) {
				oMetadata.group = oSection.group;
			}
		}		
		return oMetadata;
	}
	function _getMetadata(sRoot, sSub) {
		if(sRoot) {
			if(sSub) {
				return _getSubsectionsMetadata(sRoot, sSub);
			} 
			return _getSectionsMetadata(sRoot);
		}
	}
	
	function _getStructure(sRoot, sSub, sLang='ru'){
		if(sRoot) {
			if(sSub) {
				return _getSubsectionsList(sRoot, sSub);
			} 
			return _getSectionsList(sRoot);
		}
		
		let aStructure = [];
		
		data.forEach(function(oRoot){
			if(oRoot.visible == false) {
				return;
			}
			let oNode = {};
			oNode.key = oRoot.key;
			oNode.title = oRoot.title;
			if(oRoot.sub) {
				oRoot.sub.forEach(function(oSection){
					if(oSection.visible == false) {
						return;
					}
					let oSubNode = {};
					oSubNode.key = oSection.key;
					oSubNode.title = oSection.title;
					
					if(oSection.sub) {
						oSection.sub.forEach(function(oSubsection){							
							if(oSubsection.visible == false) {
								return;
							}
							 // if en/ru
							if(oSubsection[sLang]) {
								oSubsection = oSubsection[sLang];
							}
							let oSubSubNode = {};
							oSubSubNode.key = oSubsection.key;
							oSubSubNode.title = oSubsection.title;
							
							if(oSubsection.data.item && oSubsection.data.item.data && oSubsection.data.item.data.level != undefined){
								oSubSubNode.level = oSubsection.data.item.data.level;
							}
							
							if(!oSubNode.sub) {
								oSubNode.sub = [];
							}
							oSubNode.sub.push(oSubSubNode);
						}); 
					}
					
					if(!oNode.sub) {
						oNode.sub = [];
					}
					oNode.sub.push(oSubNode);
				}); 
			}
			
			aStructure.push(oNode);
		});
		
		return aStructure;
	}
	
	function _findDataWithLang(oParent, sKey, sLang){
		if(oParent.sub) {			
			let oRet = oParent.sub.find(el=>el.key==sKey);
			
			if(oRet){
				return oRet;
			}
			
			if(sLang) {			
				let oTmpResult = oParent.sub.find(el=>el[sLang] && el[sLang].key==sKey);
				if(oTmpResult && oTmpResult[sLang]) {
					return oTmpResult[sLang];
				}
			}
		} else if(Array.isArray(oParent)){
			let oRet = oParent.find(el=>el.key==sKey);
			
			if(oRet){
				return oRet;
			}
			
			if(sLang) {			
				let oTmpResult = oParent.find(el=>el.key==sKey || el[sLang].key==sKey);
				if(oTmpResult && oTmpResult[sLang]) {
					return oTmpResult[sLang];
				}
			}
		}
		
		
		return null;
	}
	
	function _getByPath(sRoot, sSection, sSubsection, sLang='ru'){
		let oContent;
		let aSources = [];
		if(sRoot) {
			let oRoot = _findDataWithLang(data, sRoot, sLang);
			if(oRoot){
				if(oRoot.source) {
					aSources.push(oRoot.source);
				}
				if(sSection && oRoot.sub) {
					let oSection = _findDataWithLang(oRoot, sSection, sLang);
					if(oSection.source) {
						aSources.push(oSection.source);
					}
					if(sSubsection && oSection.sub) {
						let oSubsection = _findDataWithLang(oSection, sSubsection, sLang);
						
						if(oSubsection) {
							if(oSubsection.source) {
								aSources.push(oSubsection.source);
							}
							oContent = oSubsection;
						} else {
							oContent = {};
						}
					} else if(sSubsection && oSection.data && oSection.data.moves){
						let oMove = oSection.data.moves.find(el=>el.key==sSubsection);
						if(oMove) {
							if(oMove.source) {
								aSources.push(oMove.source);
							}
							oContent = oMove
						} else {
							oContent = {};
						}
					} else {
						oContent = oSection;
					}
				} else {
					oContent = oRoot;
				}
			}

			
			if(oContent && oContent.data) {
				let o = {};
				// list of smth
				if(oContent.data.list) {
					o.type = 'list';
					//o.list = oContent.data.list;
				
					//random
					let bRand = (oContent.data.list.meta && oContent.data.list.meta.bShuffle) !== false;
					
					o.list = oContent.data.list;
					if(bRand) {
						o.list.data = shuffle(oContent.data.list.data, bRand);
					}
				
				}
				// move
				if(oContent.data.move) {
					o.type = 'move';
					o.move = oContent.data.move;
					o.move.data.title = oContent.title;					
				}
				
				//item
				if(oContent.data.item) {
					o.type = 'item';
					o.item = oContent.data.item;
					o.item.data.title = oContent.title;				
				}
				
				if(oContent.data.pre) {
					o.pre = oContent.data.pre;
				}			

				if(aSources.length>0) {
					o.sources = aSources;
				}
				

				if(oContent.kind !== undefined) {
					o.move.data.kind = oContent.kind;
				}

				return o;
			}
		}
	}
	
	function _getList(sPath, {bShuffle=true}){
		aPath = sPath.split("/");
		let sRoot = aPath[0], sSection = aPath[1], sSubsection = aPath[2];
		let oData = _getByPath(sRoot, sSection, sSubsection);
		if(oData.type == 'list') {
			return bShuffle? shuffle(oData.list.data): oData.list.data;
		}
		return null;
	}
	function _getResult (sPath, {options}){
		aPath = sPath.split("/");
		let sRoot = aPath[0], sSection = aPath[1], sSubsection = aPath[2];
		let oData = _getByPath(sRoot, sSection, sSubsection);
		if(!oData) {
			return [];
		}
		switch(oData.type) {
			case 'list': 
				
				let aList = (oData.list?.meta?.bShowRandom !== false)? _getListResult(oData.list, {options}) : [];
				
				return aList;
				break;
			case 'move': 
				return oData.move.data;
				break;
		}
		
	}
	function _getListResult(oList, {options}){
		let nStart = 0;
		let aResult = [];
		let nCount = 1;
		let oMeta = oList.meta;
		if(oMeta && oMeta.options && options && options.length>0) {
			let aSelected = oMeta.options.filter(el=>options.includes(el.key));
			if(aSelected && aSelected.length>0) {			
				let oOffset = oMeta.options.find(el=>el.key == 'offset_start' && el.checked);	
				let oNumber = oMeta.options.find(el=>el.key == 'count' && el.checked);			
				if(oOffset) {
					nStart = parseDie(oOffset.value);
				}
				if(oNumber) {
					nCount = oNumber.value;
				}
			}
		}
		
		for (let i=0; i<nCount; i++) {
			let nRand = randd(nStart, oList.data.length-1);
			aResult.push(oList.data[nRand])
		}
		return aResult;
	}


	function _getRandomMonster({options}) {
		let aProps = _getResult("frankenstein/props", {options: options});
		let aTreassure = _getResult("frankenstein/trerasure", {options: options});
		let aTactics = _getResult("frankenstein/tactics", {options: options});
		
		return {
			props: aProps,
			treassure: aTreassure,
			tactics: aTactics
		};
	}
  // This function will contain all our code

	function _init(){
		_setMoveLinks();
	}
	
	function returnLibrary(){
    var _Lib = {};
		_init();
		
		_Lib.data = data;
		_Lib.randd = randd;
		_Lib.shuffle = shuffle;
		_Lib.parseDie = parseDie;
		
		_Lib.getStructure = _getStructure;
		_Lib.getMetadata = _getMetadata;
		_Lib.getByPath = _getByPath;
		_Lib.getList = _getList;
		_Lib.getResult = _getResult;
		
		_Lib.getRandomMonster = _getRandomMonster;
		
		_Lib.version = '24.01.2022';

    return _Lib;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.lib_DW) === 'undefined'){
    window.lib_DW = returnLibrary();
  }
})(window); // We send the window variable withing our function
