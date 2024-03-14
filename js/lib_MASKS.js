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
					title: "SUPERIOR ходы",
					key: "roll_superior",
					color: "",
					ico: "",
					type: 0,
					kind: 2,
					source: '111',
					info: [
						"31 Custom Moves for Masks: A New Generation by Meghan Cross",
						"these moves were written as a part of #movemonth hosted by james malloy (@andthemeltdowns) and brandon leon-gambetta (@bleongambetta)",
						"{В процессе добавления...}"
					],
					sub: [
						{
							en: {
								title: "Passion or Heartbreak",
								key: "passion_or_eartbreak",
								kind: 2,
								data: {
									move: {
										data: {
											condition: "When you [talk to someone at length about a subject you are passionate about as a means of distraction], roll +%SUPERIOR%.",

											parts: [
												{
													type: 'hit',
													info: "On a hit, your audience is enraptured and you create an opportunity for  your team to act without being noticed.",

													parts: [
														{
															type: 'great',
															info: "On a 10+, choose 2"
														},
														{
															type: 'partial',
															info: "On a 7-9+, choose 1"
														},
													],

													list: [
														"Your team gets {+1 forward} on any actions that are a direct result of your distraction.",
														"You gain {influence} over your target and {+1 forward} on moves against them.",
														"You are able to join your team without being noticed once you are done.",
													]
												},

												{
													type:'miss',
													info: 'On a miss, the distraction fails. Mark the {insecure condition} and leave with your team to create a new plan.'
												}
											]
											
										}
									}
								}
							},
							ru: {
								title: "Заговори зубы",
								key: "passion_or_eartbreak",
								kind: 2,
								data: {
									move: {
										data: {
											condition: "Когда ты [долго разговариваешь с кем-то на очень интересующую тебя тему], чтобы отвлечь, брось +%SUPERIOR%.",

											parts: [
												{
													type: 'hit',
													info: "При успехе ваша аудитория приходит в восторг, и вы даете  команде возможность действовать незаметно.",

													parts: [
														{
															type: 'great',
															info: "На 10+ выбери 2"
														},
														{
															type: 'partial',
															info: "На 7-9 выбери 1"
														},
													],

													list: [
														"Команда получает {+1 на следующий бросок}, являющися прямым следствием вашего отвлечения.",
														"Ты получаешь {Влияние} на цель и {+1 на следующий} ход против него.",
														"По завершении вы можете незаметно присоединиться к команде.",
													]
												},

												{
													type:'miss',
													info: 'При провале отвлечь не удалось. Отметь {состояние Неуверенный} и покиньте это место всей командой, чтобы разработать новый план.'
												}
											]
											
										}
									}
								}
							},
						},
						{
							en: {
								title: "Poll of players",
								key: "poll_of_players",
								kind: 2,
								data: {
									move: {
										data: {
											condition: "When it is [time to come together to decide what type of pizza to order], choose one player to place the order. The Orderer will begin by telling the group what type of pizza they want and ask each player the same question.",

											parts: [
												{
													info: "If there is a consensus, roll +%MUNDANE%.",
													parts: [
														{
															type: 'hit',
															info: "On a hit, the pizza is ordered successfully.",
		
															parts: [
																{
																	type: 'great',
																	info: "On a 10+, choose 2"
																},
																{
																	type: 'partial',
																	info: "On a 7-9+, choose 1"
																},
															],
		
															list: [
																"The person taking the order honors an expired coupon, saving you money.",
																"The pizza arrives faster than expected.",
																"The pizza is cooked to perfection.",
															]
														},
													]
												},

												{
													info: "If there is a disagreement, roll +%SUPERIOR%.",
													parts: [
														{
															type: 'hit',
															info: "On a hit, you are barely able to reach a compromise and place the order.",
		
															parts: [
																{
																	type: 'great',
																	info: "On a 10+, {hold} 2"
																},
																{
																	type: 'partial',
																	info: "On a 7-9+, {hold} 1"
																},
																{
																	info: 'Spend 1 {hold} to remove an option from the list below.'
																},
																{
																	list: [
																		"The pizza disagreement caused a rift in the team. Players who did not agree with the final order may remove {influence} over them from another player.",
																		"The delivery person gets lost and by the time the pizza arrives, it is cold and unsatisfying. (And they refuse to waive the delivery fee!) Mark the {Angry condition} as you grumpily eat cold pizza",
																		"Either something was undercooked or it was the combination of hamburger, olives, and pineapple - but something isn’t sitting right. {-1 ongoing} until you are able to take some Tums and sleep off the nausea.",
																	]
																}
															],
															
														},
														{
															info: "At any point during the disagreement, the orderer can choose to mark a {condition} to overrule the group and order what they want."
														}
													]
												}
											]
											
										}
									}
								}
							},
							ru: {
								title: "Выберите пиццу",
								key: "poll_of_players",
								kind: 2,
								data: {
									move: {
										data: {
											condition: "Когда пришло время собраться и [решить, каую пиццу заказать], выберите одного игрока, который будет делать заказ. Он сначала говорит какую пиццу хочет сам, потом спрашивает мнение остальных.",

											parts: [
												{
													info: "Если все согласны, брось +%MUNDANE%.",
													parts: [
														{
															type: 'hit',
															info: "При успехе пицца успешно заказана.",
		
															parts: [
																{
																	type: 'great',
																	info: "На 10+ выбери 2"
																},
																{
																	type: 'partial',
																	info: "На 7-9+ выбери 1"
																},
															],
		
															list: [
																"При заказе удалось уговорить приянть просроченный купон. Сдвинь {Mundane} вверх, любой другой {ярлык} вниз.",
																"Пицца прибывает раньше, чем ожидалось. Очисть {Состояние}.",
																"Пицца великолепно приготовлена. Добавь 1 в {Тимпул}.",
															]
														},
													]
												},

												{
													info: "Если не удалось прийти к согласию, брось +%SUPERIOR%.",
													parts: [
														{
															type: 'hit',
															info: "При успехе вам едва удается достичь компромиса и сделать заказ.",
		
															parts: [
																{
																	type: 'great',
																	info: "На 10+ выбери 1"
																},
																{
																	type: 'partial',
																	info: "На 7-9+ выбери 2"
																},
																{
																	list: [
																		"Разногласия во время выбора пиццы вызвали раскол в команде. Игроки, несогласные с получившимся выбором могут забрать {Влияние} у других игроков.",
																		"Доставщик заблудился, и когда пицца у вас, она холодная и невкусная. (И вам отказываются вернуть деньги!) Отметьте состояние {Злой}, недовольно поедая холодную пиццу.",
																		"То ли что-то было сыровато, то ли это сочетание гамбургера, оливок и ананаса - но что-то пошло не так. Получи {-1 на следующие} броски, пока не удастся приянть таблетки от изжоги и выспаться, избавивишись от тошноты.",
																	]
																}
															],
															
														},
												
														{
															info: "В любой момент заказывающий может отметить себе {Сотояние}, чтобы преиграть решение и заказать то, что все хотят."
														}
													]
												}
											],

											translator: "Исходный ход забавный, но малоосмысленный, поэтому в переводе добавлено немного механических бонусов"
											
										}
									}
								}
							},
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
											condition: "Когда ты [пытаешься использовать свою гражданкую личность] ввести в заблуждение, обхитрить или проскользнуть мимо кого-то, брось +%MUNDANE%.",
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
					
				{
					title: "Чужак",
					key: "outsider",
					color: "",
					ico: "",
					type: 1,				
					sub: [
						{
							en: {
								title: "Belong in two worlds",
								key: "belong_two_worlds",
								data: {
									move: {
										data: {											
											condition: "You have the resources that come with your station. Whenever you [contact your people], roll +%SUPERIOR%.",	
											
											parts: [																							
												{
													type: "great",
													info: "On a 10+, hold 3."																	
												},
												{
													type: "partial",
													info: "On a 7-9, hold 2.",																
												},
													
												{
													type: "miss",
													info: "On a miss, hold 1, but your people make an uncomfortable demand of you.",															
												},
												{
													info: "Spend your {hold} 1 for 1 to:",
													list: [
														"receive a {useful piece of alien technology} that will allow you to use {any ability from another playbook once} (choose the ability when you spend the hold)",
														"consult your people’s knowledge to ask the GM a question about the current situation",
														"clear a {condition} through the comfort of contact with your home"
													]	
												}
											],

											notes: "[Belong in two worlds] inherently implies that you have some status and power with your people. You also must have some method of contacting your people, whatever that might be for you.|| The hold you spend on {pieces of tech} or {answers} can represent benefits you’ve gained over the course of your communication with your people, allowing you to say afer the fact that they gave you technology or  information during the conversation. Spending a {hold} to clear a {condition} through contact with home, however, is only appropriate when you’re actually in contact with home."
										}
									}									
								}
							},
							ru: {
								title: "Житель двух миров",
								key: "belong_two_worlds",
								data: {
									move: {
										data: {											
											condition: "У тебя есть доступ к ресурсам на станции. Всякий раз[обращаясь к своему народу], брось +%SUPERIOR%.",	
											
											parts: [
																									
												{
													type: "great",
													info: "На 10+ получи {запас} 3"																	
												},
												{
													type: "partial",
													info: "На 7-9 получи {запас} 2",																
												},
													
												{
													type: "miss",
													info: "При провале получи {запас} 1, но твой народ предъявляет неудобные требования",															
												},
												{
													info: "Обменяй {запас} 1 к одному 1:",
													list: [
														"получи {полезную технологию}, которая позволит использовать {любую способность из другого плейбука один раз} (выбери способность, когда тратишь сохраненное)",
														"обратись к знаниям своего народа, чтобы задать ГМ вопрос о ситуации",
														"очисти одно {Состояние}, благодаря приятному разговору"
													]	
												}
											],

											notes: "[Belong in two worlds] inherently implies that you have some status and power with your people. You also must have some method of contacting your people, whatever that might be for you.|| The hold you spend on {pieces of tech} or {answers} can represent benefits you’ve gained over the course of your communication with your people, allowing you to say afer the fact that they gave you technology or  information during the conversation. Spending a {hold} to clear a {condition} through contact with home, however, is only appropriate when you’re actually in contact with home."
										}
									}									
								}																	
							}
						},

						{
							en: {
								title: "Alien tech",
								key: "alien_tech",
								data: {
									move: {
										data: {											
											condition: "When you [alter a human device] with your alien technology, roll +%FREAK%.",	
											
											parts: [			
												{
													type: "hit",
													info: "On a hit, you create a device that can do something impossible once and then fizzle.",

													parts: [
														{
															type: "great",
															info: "When you roll a 10+, choose one:",
															list: [
																"it works exceptionally well",
																"you get an additional use out of it"
															]																		
														},
														
													]
												},																	
												
													
												{
													type: "miss",
													info: "On a miss, the device works, but it has a completely unintended side effect that the GM will reveal when you use it.",															
												},
											
											],

											notes: "When you create a device with [Alien tech], you still need human technology to build on. While whatever you build can do something impossible, it often does a limited version of it — choosing on a 10+ that the {device works exceptionally well} ensures that you get everything you wanted, and maybe more."
										}
									}									
								}
							},
							ru: {
								title: "Технология чужих",
								key: "alien_tech",
								data: {
									move: {
										data: {											
											condition: "Когда ты [модифицируешь человеческое устройство] с помощью своих внеземных технологий, брось +%FREAK%.",	
											
											parts: [			
												{
													type: "hit",
													info: "При успехе ты создаешь устройство, которое может сделать что-нибудь невозможное один раз, и потом выходит из строя.",

													parts: [
														{
															type: "great",
															info: "На 10+ выбери 1:",
															list: [
																"оно работраент даже лучше, чем ожидалось",
																"ты сможешь его использовать еще один раз"
															]																		
														},
														
													]
												},																	
												
													
												{
													type: "miss",
													info: "При провале устройство сработает, но у него есть непредвиденный побочный эффект, который ГМ объявит уже после использоования.",															
												},
											
											],

											notes: "When you create a device with [Alien tech], you still need human technology to build on. While whatever you build can do something impossible, it often does a limited version of it — choosing on a 10+ that the {device works exceptionally well} ensures that you get everything you wanted, and maybe more."
										}
									}									
								}																
							}
						},

						{
							en: {
								title: "Alien ways",
								key: "alien_ways",
								data: {
									move: {
										data: {
											condition: "Whenever you [openly disregard or undermine] an important Earth custom in favor of one of your own people’s customs, shift %SUPERIOR% up and any other {Label} down.",

											notes: "For [Alien ways], what counts as an important Earth custom is ultimately up to you and the GM. As a guideline, a custom is important when undermining it has consequences and/or creates friction with those around you. If nobody cares if you undermine that custom, it’s probably not all that important."
										}
									}
								}
							},
							ru: {
								title: "Иные пути",
								key: "alien_ways",
								data: {
									move: {
										data: {
											condition: "Когда ты [явно игнорируешь или открыто подрываешь] важные земные обычаи, в угоду обычаям твоего родного мира, сдвинь %SUPERIOR% вверх и любой другой {Ярлык} вниз.",

											notes: "For [Alien ways], what counts as an important Earth custom is ultimately up to you and the GM. As a guideline, a custom is important when undermining it has consequences and/or creates friction with those around you. If nobody cares if you undermine that custom, it’s probably not all that important."
										}
									}
								}
							}
						},

						{
							en: {
								title: "Kirby-craft",
								key: "kirby_craft",
								data: {
									move: {
										data: {
											info: "You have a vehicle, something from your home. Detail its look, and choose two {strengths} and two {weaknesses}.",
											condition: "When you are [flying your ship], you can use it to <unleash your powers#player_moves|basic_moves|unleash_your_power>, <directly engage a threat#player_moves|basic_moves|directly_engage_threat>, or <defend#player_moves|basic_moves|defend> someone using %SUPERIOR%",
											
											parts: [
												{
													info: "Strength:",
													list: [
														"Fast & maneuverable",
														"chameleon plating",
														"powerful weaponry",
														"regenerating",
														"dimension-shifting",
														"size-shifting",
														"telepathic",
													]
												},
												{
													info: "Weaknesses:",
													list: [
														"Bizarre fuel source",
														"susceptible to _______",
														"easily detectable",
														"slow and clumsy",
														"unarmed",
														"difficult to repair"
													]
												},
											],

											notes: "Iа you take a [Kirby-craf], its particulars are largely down to your fictional set up. How big is it? As big as you think makes sense. What does it look like? Whatever makes sense for your people’s technology. Its strengths and weaknesses just tell you and the GM the important pieces about what the ship can do and how it can be damaged. If it gets damaged, you have to repair it to use it again."
										}
									}
								}
							},
							ru: {
								title: "Гравилет",
								key: "kirby_craft",
								data: {
									move: {
										data: {
											info: "У тебя есть транспорт, что-то из твоего родного мира. Расскажи как он выглядит и выбери два {преимущества} и два {недостатка}",
											condition: "Когда ты [управляешь своим транспортом], можешь использовать его возможности, чтобы  <дать волю силам#player_moves|basic_moves|unleash_your_power>, <выйти против явной угрозы#player_moves|basic_moves|directly_engage_threat> или <защитить#player_moves|basic_moves|defend> кого-то используя ярлык %SUPERIOR%",
											
											parts: [
												{
													info: "Преимущества:",
													list: [
														"быстрый и маневренный",
														"скрывающее покрытие",
														"мощное вооружение",
														"регенерация",
														"пространсвенный сдвиг (?)",
														"изменяемый размер",
														"телепаятия",
													]
												},
												{
													info: "Недостатки:",
													list: [
														"странный источник топлива",
														"восприимчиваость к_______",
														"легко засечь",
														"медленный и неповоротливый",
														"без вооружения",
														"сложно отремонтировать"
													]
												},
											],

											notes: "Iа you take a [Kirby-craf], its particulars are largely down to your fictional set up. How big is it? As big as you think makes sense. What does it look like? Whatever makes sense for your people’s technology. Its strengths and weaknesses just tell you and the GM the important pieces about what the ship can do and how it can be damaged. If it gets damaged, you have to repair it to use it again."
										}
									}
								}
							}
						},

						{
							en: {
								title: "The best of them",
								key: "best_of_them",
								data: {
									move: {
										data: {
											condition: "When you <comfort or support#player_moves|basic_moves|comfort_support> someone by telling them [how they exemplify the best parts of Earth], roll +%FREAK% instead of +%MUNDANE%.",

											
										}
									}
								}
							},
							ru: {
								title: "Лучший из них",
								key: "best_of_them",
								data: {
									move: {
										data: {
											condition: "Когда ты <утешаешь или поддерживаешь#player_moves|basic_moves|comfort_support> кого-то, [рассказывая, как он иллюстрируют лучшее что есть на Земле], брось +%FREAK% вместпо +%MUNDANE%.",

											
										}
									}
								}
							}
						},

						{
							en: {
								title: "Not so different after all",
								key: "not_so_different",
								data: {
									move: {
										data: {											
											condition: "When you [talk about your home], roll  +%FREAK%.",	
											
											parts: [	
												{
													type: 'hit',
													info: 'On a hit',
													parts: [
														{
															type: "great",
															info: "On a 10+, choose two"
														},
														{
															type: "partial",
															info: "On a 7-9, choose one"
														},
																
														{
															list: [
																"confess a flaw of your home; add 1 {Team} to the pool",
																"mislead them about your home; take {Influence} over them",
																"describe the glories of your home; clear a {condition}",
															]
														},	
													]
												},
												
												{
													type: "miss",
													info: "On a miss, you inadvertently reveal more about yourself than you planned; tell them a secret or vulnerability you haven’t shared with Earthlings before now",															
												},
											
											],

											notes: "For [Not so different afer all], remember that you have to actually do whatever options you choose. Make sure you let the other players know how you {confess a flaw of your home}, {mislead them about your home}, or {describe the glories of your home} during the conversation."
										}
									}									
								}
							},
							ru: {
								title: "Не такие уж и разные",
								key: "not_so_different",
								data: {
									move: {
										data: {											
											condition: "Когда ты [рассказываешь о своем доме], брось +%FREAK%.",	
											
											parts: [	
												{
													type: 'hit',
													info: 'При успехе',

													parts: [
														{
															type: "great",
															info: "На 10+ выбери 2"
														},
														{
															type: "partial",
															info: "На 7-9 выбери 1"
														},
																
														{
															list: [
																"признай недостаток своего дома; добавь 1 в {Тимпул}",
																"введи в заблуждение относительно своего дома; получи {Влияние} на цель",
																"расскажи, чем славится твой дом; очисть {Состояние}"
															]
														},	
													]
												},
												
												{
													type: "miss",
													info: "При провале ты непреднамеренно раскрываешь о себе больше, чем планировала; сообщи им {секрет или уязвимость}, которой ты до сих пор не делились с землянами.",															
												},
											
											],

											notes: "For [Not so different afer all], remember that you have to actually do whatever options you choose. Make sure you let the other players know how you {confess a flaw of your home}, {mislead them about your home}, or {describe the glories of your home} during the conversation."
										}
									}									
								}														
							}
						},


					]
				},

				{
					title: "Протеже",
					key: "protege",
					color: "",
					ico: "",
					type: 1,				
					sub: [
						{
							en: {
								title: "Been reading the files",
								key: "reading_files",
								data: {
									move: {
										data: {											
											condition: "You’ve learned about the superhuman world through your mentor’s resources. When you [first encounter an important superpowered phenomenon] (your call), roll +%SUPERIOR%.",	
											
											parts: [	
												{
													type: 'hit',
													info: 'On a hit, tell the team one important detail you’ve learned from your studies. The GM will tell you what, if anything, seems different from what you remember.',
													parts: [
														{
															type: "great",
															info: "On a 10+, ask the GM a follow-up question; they will answer it honestly."
														}
													]
												},

												{
													type: 'miss',
													info: 'On a miss, the situation is well outside your base of knowledge; the GM will tell you why.'
												}
											],

											notes: "For [Been reading the files], you’re assumed to be reading or otherwise learning about the superhuman world from your mentor — in whatever way fits their MO. You only trigger the move, though, the first time you encounter any given important superhuman phenomenon. You can’t say you read a file about them during a later encounter. When you tell the team the most important detail you remember, you have a responsibility to stick to whatever fiction is already established about the world and this character — but otherwise, you can add whatever detail you want. Te GM tells you if anything is different, meaning that they’ll alert you if things have changed surrounding the detail you provided."
										}
									}
								}
							},
							ru: {
								title: "Читал файлы",
								key: "reading_files",
								data: {
									move: {
										data: {											
											condition: "Ты изучал мир суперлюдей с помощью ресурсов наставника. Когда ты [впервые сталкиваешься с важным сверъестественным явленипем] (по своему выбору), брось +%SUPERIOR%.",	
											
											parts: [	
												{
													type: 'hit',
													info: 'При успехе расскажи остальным одну важную деталь, которую помнишь из своих исследований. ГМ скажет, если что-нибудь, кажется не таким, как ты помнишь.',
													parts: [
														{
															type: "great",
															info: "На 10+ задай ГМ дополнительный вопрос; он ответит честно."
														}
													]
												},

												{
													type: 'miss',
													info: 'При провале ситуация далеко за пределами твоей базы знаний; ГМ скажет тебе, почему.'
												}
											],

											notes: "For [Been reading the files], you’re assumed to be reading or otherwise learning about the superhuman world from your mentor — in whatever way fits their MO. You only trigger the move, though, the first time you encounter any given important superhuman phenomenon. You can’t say you read a file about them during a later encounter. When you tell the team the most important detail you remember, you have a responsibility to stick to whatever fiction is already established about the world and this character — but otherwise, you can add whatever detail you want. Te GM tells you if anything is different, meaning that they’ll alert you if things have changed surrounding the detail you provided."
										}
									}
								}
							},
						},

						{
							en: {
								title: "Captain",
								key: "captain",
								data: {
									move: {
										data: {
											condition: "When you [enter battle as a team], add an extra {Team} to the pool and carry {+1 forward} if you are the leader.",
										}
									}
								}
							},
							ru: {
								title: "Капитан",
								key: "captain",
								data: {
									move: {
										data: {
											condition: "[Вступая в битву как команда], добавь дополнительную 1 в {тимпул}; получи {+1 к следующему}, если ты лидер.",
										}
									}
								}
							}
						},

						{
							en: {
								title: "Venting frustration",
								key: "venting_frustration",
								data: {
									move: {
										data: {
											condition: "When you [<directly engage#player_moves|basic_moves|directly_engage_threat> while you are {Angry}], you can roll +%the Label your mentor denies% and clear {Angry}.",
										}
									}
								}
							},
							ru: {
								title: "Сорваться",
								key: "venting_frustration",
								data: {
									move: {
										data: {
											condition: "Когда ты [<выходишь против угрозы#player_moves|basic_moves|directly_engage_threat>, находясь в Состоянии {Злой}], можешь бросить +%Ярлык, который отрицает твой наставник% и очистить это {Состояние}.",
										}
									}
								}
							}
						},

						{
							en: {
								title: "Fireside chat",
								key: "fireside_chat",
								data: {
									move: {
										data: {											
											condition: "When you [seek advice from your mentor], roll +%the Label they embody%.",	
											
											parts: [	
												{
													type: 'hit',
													info: 'On a hit they will tell you what to do',
													parts: [
														{
															type: "great",
															info: "On a 10+, mark {potential} if you follow their advice, and take {+1 ongoing} to follow through."
														},
														{
															type: "partial",
															info: "On a 7-9, you get {+1 forward} to see it through if you do it their way."
														},
													]
												},

												{
													type: 'miss',
													info: 'On a miss, they don’t have time for you because something big has gone down; mark a {condition}, GM’s choice.'
												}
											],
										}
									}
								}
							},
							ru: {
								title: "Беседа у камина",
								key: "fireside_chat",
								data: {
									move: {
										data: {											
											condition: "Когда ты [обращаешься за советом к своему наставнику], брось +%Ярлык, который он воплощает%.",	
											
											parts: [	
												{
													type: 'hit',
													info: 'При успехе он скажет тебе, что делать',
													parts: [
														{
															type: "great",
															info: "На 10+ отметь {потенциал}, если будешь следовать его советам и {получи +1} для этих действий."
														},
														{
															type: "partial",
															info: "На 7-9 получи {+1 к следующему}, если сделаешь все по-своему."
														},
													]
												},

												{
													type: 'miss',
													info: 'При провале у него нет времени для тебя, потому что нечто серьезное пошло не так; отметьте {Состояние} по выбору ГМ.'
												}
											],
										}
									}
								}
							},
						},

						{
							en: {
								title: "Be mindful of your surroundings",
								key: "be_mindful",
								data: {
									move: {
										data: {
											condition: "When you [<assess the situation#player_moves|basic_moves|asses_sitiation> before entering into a fight], you may ask one additional question, even on a miss.",
										}
									}
								}
							},
							ru: {
								title: "Будь внимательной к окружению",
								key: "be_mindful",
								data: {
									move: {
										data: {
											condition: "Когда ты [<оцениваешь ситуацию#player_moves|basic_moves|asses_sitiatio> перед вступлением в бой], ты можешь задать еще один вопрос, даже при провале.",
										}
									}
								}
							}
						},

						{
							en: {
								title: "Heroic tradition",
								key: "heroic_tradition",
								data: {
									move: {
										data: {
											condition: "When you [give someone the advice that you think your mentor would give], you can roll +%the Label your mentor embodies% to <comfort or support#player_moves|basic_moves|comfort_support> someone, instead of rolling +%MUNDANE%.",
										}
									}
								}
							},
							ru: {
								title: "Героическая традиция",
								key: "heroic_tradition",
								data: {
									move: {
										data: {
											condition: "Когда ты [даешь кому-то совет, который, как ты думаешь, дал бы наставник], брось +%Ярлык, который он воплощает%, чтобы <утешить или поддержать#player_moves|basic_moves|comfort_support> кого-то, вместо того, чтобы использовать +%MUNDANE%.",
										}
									}
								}
							}
						},
					]
				},

				{
					title: "Преображенный",
					key: "transformed",
					color: "",
					ico: "",
					type: 1,				
					sub: [
						{
							en: {
								title: "I am not my body",
								key: "not_my_body",
								data: {
									move: {
										data: {
											condition: "When you [<take a powerful physical blow#player_moves|basic_moves|powerful_blow>], you may roll as if you had two fewer {conditions} marked.",
											parts: [
												{
													type: 'great',
													info: 'If you do, on a 10+ you must choose to {lose control of yourself in a terrible way}.'
												}
											]
											
										}
									}
								}
							},
							ru: {
								title: "Я - не мое тело",
								key: "not_my_body",
								data: {
									move: {
										data: {
											condition: "Когда ты [<получаешь мощный физический удар#player_moves|basic_moves|powerful_blow>], ты можешь бросать так, будто у тебя на два {Состояния} меньше.",
											parts: [
												{
													type: 'great',
													info: 'Если ты делаешь это и получаешь 10+ {потеряй контроль над собой ужасным образом}.'
												}
											]
											
										}
									}
								}
							}
						},
						
						{
							en: {
								title: "Not human enough",
								key: "not_human_enough",
								data: {
									move: {
										data: {
											condition: "When you [<directly engage a threat#player_moves|basic_moves|directly_engage_threat> in a terrifying fashion], mark a {condition} to choose an additional option, even on a miss.",

											notes: "For [Not human enough], what counts as a “terrifying way” is up to you and the GM, but the GM might push you on it to make sure you’re doing something actually terrifying."
										}
									}
								}
							},
							ru: {
								title: "Не совсем человек",
								key: "not_human_enough",
								data: {
									move: {
										data: {
											condition: "Когда ты [<выходишь против явной угрозы#player_moves|basic_moves|directly_engage_threat> ужасающим образом], можешь отметить {Состояние}, чтобы добавить еще 1 вариант, даже при провале.",

											notes: "For [Not human enough], what counts as a “terrifying way” is up to you and the GM, but the GM might push you on it to make sure you’re doing something actually terrifying."
										}
									}
								}
							}
						},

						{
							en: {
								title: "Unstoppable",
								key: "unstoppable",
								data: {
									move: {
										data: {											
											condition: "When you [smash your way through scenery] to get to or away from something, roll +%DANGER%.",	
											
											parts: [		
												{
													type: 'hit',
													info: 'On a hit, the world breaks before you, and you get what you want.',
													parts: [
														{
															type: "partial",
															info: "On a 7-9, choose one",
															list: [
																"mark a {condition}",
																"leave something behind",
																"take something with you",
															]													
														},
													]
												},	
												{
													type: "miss",
													info: "On a miss, you smash through, but leave devastation in your wake or wind up somewhere worse, GM’s choice.",															
												},
											],
										
										}
									}									
								}
							},
							ru: {
								title: "Неудержимый",
								key: "unstoppable",
								data: {
									move: {
										data: {											
											condition: "Когда ты [пробиваешься сквозь препятствия], чтобы добратсья до чего-то или убежать от чего-то, брось +%DANGER%.",	
											
											parts: [		
												{
													type: 'hit',
													info: 'При успехе все окружающее рассыпается перед тобой и ты достигаешь цели.',
													parts: [
														{
															type: "partial",
															info: "На 7-9 выбери один",
															list: [
																"отметь {Состояние}",
																"потеряй что-нибудь",
																"утащи что-нибудь за собой",
															]													
														},
													]
												},
													
												{
													type: "miss",
													info: "При провале ты прорываешься, но оставляешь за собой разруху или оказываешься в непростой ситуации, на выбор ГМ",															
												},
												
											],

										
										}
									}									
								}																	
							}
						},

						{
							en: {
								title: "Coming for you",
								key: "coming_for_you",
								data: {
									move: {
										data: {
											condition: "When you [mark a {conditio}n], take {+1 forwar}d against the person you most blame for causing it.",
											notes: 'For [Coming for you], if it’s not immediately obvious who’s to blame for a given {condition} you mark, don’t worry about it and don’t bother to keep track—you’ll mark plenty of {conditions}, so just worry about the times when it’s a pretty clear choice.'
										}
									}
								}
							},
							ru: {
								title: "Я прийду за тобой",
								key: "coming_for_you",
								data: {
									move: {
										data: {
											condition: "Когда ты [отмечаешь {Состояние}], получи {+1 к следующему} против того, кого ты больше всего обвиняешь в этом.",
											notes: 'For [Coming for you], if it’s not immediately obvious who’s to blame for a given {condition} you mark, don’t worry about it and don’t bother to keep track—you’ll mark plenty of {conditions}, so just worry about the times when it’s a pretty clear choice.'
										}
									}
								}
							}
						},
						
						{
							en: {
								title: "Wish I could be",
								key: "wish_i_could_be",
								data: {
									move: {
										data: {
											condition: "When you [<comfort or support someone#player_moves|basic_moves|comfort_support>], if you tell them what you most envy about them, you can roll +%FREAK% instead of +%MUNDANE%.",
										}
									}
								}
							},
							ru: {
								title: "Как бы хотелось быть",
								key: "wish_i_could_be",
								data: {
									move: {
										data: {
											condition: "Когда ты [<утешаешь или поддерживаешь#player_moves|basic_moves|comfort_support>] кого-то и рассказываешь, чему в нём ты больше всего завидуешь, можешь бросать +%FREAK%  вместо +%MUNDANE%.",
										}
									}
								}
							}
						},

						{
							en: {
								title: "Be the monster",
								key: "be_the_monster",
								data: {
									move: {
										data: {											
											condition: "When you [frighten, intimidate, or cow others] with your monstrous form, roll +%FREAK%.",	
											
											parts: [	
												{
													type: 'hit',
													info: 'On a hit, they are thrown off and make themselves {vulnerable} to you, or they {flee}.',
													parts: [
														{
															type: "great",
															info: "On a 10+, choose one"
														},
														{
															type: "partial",
															info: "On a 7-9, choose two"
														},
																
														{
															list: [
																"you frighten others you had not intended to scare",
																"you hurt someone or break something you shouldn’t have",
																"you feel like more of a monster afterward; mark a {condition} (GM’s choice)",
															]
														},	
													]
												},
												
												{
													type: "miss",
													info: "On a miss, they react with violence, hatred, and paranoia, and you suffer the brunt of it.",															
												},											
											],

											notes: "For [Be the monster], there might be times when it doesn’t make sense that you could frighten or intimidate another individual — the GM lets you know if that happens. Otherwise, though, the move should trigger whenever you do something outright meant to provoke fear."
										}
									}									
								}
							},
							ru: {
								title: "Быть монстром",
								key: "be_the_monster",
								data: {
									move: {
										data: {											
											condition: "Когда ты [пугаешь, угрожаешь, или принуждаешь] сделать что-то с помощью своей монтруозной формы, брось +%FREAK%.",	
											
											parts: [	
												{
													type: 'hit',
													info: 'При успехе они становятся {уязвимыми} для тебя или {убегают}.',
													parts: [
														{
															type: "great",
															info: "На 10+ выбери один"
														},
														{
															type: "partial",
															info: "На 7-9 выбери два."
														},
																
														{
															list: [
																"ты испугал не только тех, кого собирался",
																"ты, не желая того, причиняешь кому-то боль или ломаешь что-то",
																"после этого ты чувствуешь себя монстром еще сильнее, отметь {Состояние} (по выбору ДМ)",
															]
														},	
													]
												},
												
												{
													type: "miss",
													info: "При провале их реакцией является насилие, ненависть и паранойя и ты страдаешь от этого первым.",															
												},											
											],

											notes: "For [Be the monster], there might be times when it doesn’t make sense that you could frighten or intimidate another individual — the GM lets you know if that happens. Otherwise, though, the move should trigger whenever you do something outright meant to provoke fear."
										}
									}									
								}												
							}
						},
					]
				}
			]
		},
		
				
		{
			title: "Рандомизатор злодеев",
			key: "villains",
			color: "",
			ico: "",

			sub: [			
				{
					title: "Псевдоним",
					key: "alias",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Анархист", "Древний", "Граф Костей","Капитан Тень", "Лебедь", "Доктор Бесконечность", "Королева Ужаса","Призрачный Тигр", "Изумрудное Копье", "Геенна", "Призрачное Сердце", "Ледник", "Могильный Камень", "Часовщик", "Кастет","Исполнитель", "Зеркальный Зверь","Мистер Всюду", "Мистическая Госпожа", "Ракетный Молот", "Алая Певунья", "Тихий Шторм", "Паук","Стальная Маска", "Вихрь", "Время Икс", "Коготь", "Скрежет"
							]
						}
					},
				},
				{
					title: "Настоящее имя",
					key: "real_name",
					color: "",
					ico: "",
					visible: false,
					data: {
						list: {
							data: [
								
							]
						}
					},
				},
				{
					title: "Способности",
					key: "abilities",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Полный контроль тела",  "Сверхчеловеческая скорость",  "Сила и атлетизм",  "Коварный ум",  "Бесчисленные агенты",  "Почти безграничное финансирование",  "Управление стихией",  "Бесчисленные гаджеты",  "Телепортация",  "Мгновенная регенерация",  "Бессмертие",  "Поглощение жизни",  "Сверхчеловеческие боевые навыки",  "Инопланетное/мифическое оружие",  "Неосязаемость",  "Телекинез",  "Телепатия",  "Магия",  "Невероятная сила",  "Неуязвимость",  "Яд",  "Измененное тело",  "Великолепная физическая форма",  "Великолепные навыки боя",  "Великолепное вооружение",  "Стратегия/тактика",  "Кибернетическое тело",  "Взлом",  "Скрытое оружие",  "Невероятная хитрость",  "Перекачивание жизненной силы",  "Шейпшифтинг",  "Крылья",  "Контроль разума",  "Оживление объектов",  "Поглощение эмоций",  "Колдовство",  "Чародейство",  "Мастерское владение оружием",  "Роботы слуги",    "Волшебный голос",  "Невероятный интеллект",  "Супер-костюм",  "Сверхтехнологичное оружие и броня",  "Контроль реальности",  "Разрушительные волны",  "Контроль сверхспособностей",  "Пророчества",  "Экстрасенсорика",  "Захват разума/тела",  "Полет",  "Иллюзии",  "Манипуляции разумом",  "Искривление реальности",  "Щупальца",  "Управление материей",  "Энергетические лучи",  "Контроль гравитации",  "Контроль мелких созданий",  "Управление временем", 
							]
						}
					},
				},
				{
					title: "Мотивы",
					key: "drives",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Наказать виновных",
								"Обеспечить соблюдение порядка",
								"Защитить себе подобных",
								"Победить ненавистного врага",
								"Требовать внимания к себе",
								"Уничтожить угрозу миру",
								"Освободить кого-то от цепей",
								"Стать богатым",
								"Свергнуть несправедливую власть",
								"Защитить близких",
								"Очернить продажных героев",
								"Вдохновлять других",
								"Контроль над опасностями",
								"Месть за прошлые грехи",
								"Раскрыть секреты мира",
								"Создавать страх, хаос и панику",  "Распространять влияние и силу по городу",  "Искать правосудия и мести за прошлое/близких",  "Сбежать из этого мира любой ценой",  "Хранить баланс в мире",  "Поддерживать близких любыми способами",  "Вернуть утерянное",  "Разделять миры",  "Найти исцеление",  "Найти  и уничтожить того, кто сделал таким",  "Низвергнуть героев",  "Доказать свое превосходство",  "Следовать приказам",  "Контролировать супергероев/злодеев",  "Обеспечить правильное развитие событий",  "Доказать, что является величайшим криминальным лордом",  "Прорваться в эту реальность",  "Питаться самыми глубокими и сильными эмоциями",  "Защищать свою жизнь и жизни близких",  "Служить дому и защищать его",  "Вернуть былую славу",  "Переселиться в новое лучшее тело",  "Оставаться в центре внимания",  "Не быть забытым",  "Двигать мир к совершенству",  "Завоевать достойное место в мире",  "Поддерживать семью",  "Сохранять власть и положение любой ценой",  "Разрушить наследие предков",  "Перестроить мир по своему усмотрению",  "Разрушить саму систему супергероев/суперзлодеев",  "Стать настоящим героем",  "Освободиться от оков",  "Быть любимым",  "Стать мировой знаменитостью",  "Отыгрываться на других",  "Совершить то, что не смогли предки",  "Получить повышение",  "Контролировать новое поколение супергероев/суперзлодеев",  "Отомстить обидчикам",  "Вернуться к нормальной жизни",  "Установить контроль над событиями, для достижения цели в будущем",  "Обучить новое поколение",  "Жажда накопительства",  "Разрушить порядок, распространить анархию",  "Кормить и защищать угнетенных",  "Навести порядок",  "Защищать и развивать свой народ",  "Искать и побеждать достойных соперников",  "Избавиться от временных аномалий",  "Избавиться от боли",  "Захватить диковинки",  "Развить свои навыки",  "Проворачивать сложные ограбления",  "Устринить сверхчеловеческие способности", 
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
								"Призвать роботов-миньонов",
								"Открыть врата в другой мир или будущее",
								"Создать оружие или бомбу",
								"Спрятаться за приспешником",
								"Угрожать невинным",
								"Объяснить свою истинную цель",
								"Очернить героев, навязать мысль",
								"Похитить что-то ценное",
								"Превратиться в нечто более опасное",
								"Поведать о характере ловушки",
								"Принять защитную стойку и игнорировать урон",  "Улучшить свое тело/способности/инвентарь", 	 "Избежать атака со сверхъестественной грациозностью",  "Сломать или парализовать конечность точным ударом",  "Показать, что ужасная ловушка уже запущена",  "Раскрыть секрет, знания слабости или уязвимости противника",  "Метнуть опасный предмет",
								"Заточить противника",  "Возложить вину на подходящую цель",  "Использовать гаджет для решения текущей проблемы",  "Избежать опасности",  "Предложить помощь за цену",  "Пробиться сквозь препятствия с помощью способностей",  "Мгновенно исцелиться",  "Поглотить жизненную силу",  "Переместиться в безопасное место",  "Откинуть противника силами",  "Вызывать страх и слабость для получения преимущества",  "Внезапно появиться в неожиданном месте",  "Создать суматоху своими способностями",  "Призвать толпы миньонов",  "Значительно изменить окружение силами",  "Швырнуть огромный/опасный объект",  "Искать сочувствия",  "Метнуть смертельно опасный объект с невероятной точностью",  "Атаковать силами сразу несколько целей",
								"Требовать информацию о важном для себя",  "Минимальными усилиями нанести максимум урона",  "Подвергнуть опасности толпу",  "Нейтрализовать способности противника ",  "Обрушить шквал ударов",  "Применить опасное непонятное оружие",  "Управление техникой",  "Призвать на помощь продвинутые технологии и подкрепление",  "Высосать жизнь из окружения",  "Отравить",  "Использовать благие намерения в порочных целях",  "Обратиться в практически неуязвимого монстра",  "Вызвать внезапный ущерб силами",  "Предлагать помощь, когда она необходима, в обмен на услуги",  "Уговорить служить себе",  "Превратить обычный объект в страшное оружие",
								"Спровоцировать кого-та на сильные эмоции",  "Впитать жизненную силу и эмоции касанием",  "Сбежать от физического конфликта",  "Избежать конфликта с помощью обмана",  "Предложить силу за огромную цену",  "Смести кого-то проявлением своих сила",  "Создать оружие из окружения",  "Обвинить кого-то в преступлении без улик",  "Раздавить кого-то или что-то",  "Призвать смертоносных миньонов",  "Выставить недостатки противника монологом",  "Усыпить",  "Очаровать окружающих речами",  "Неожиданно изящно избежать пленения",  "Раскрыть хитрый план, который уже запущена",  "Оказать поддержку потенциальному союзнику",  "Сдерживать противниками мощным проявлением способностей",  "Показать, что ситуация - часть его плана",  "Захватить что-нибудь важное",  "Создать заслон",  "Нивелировать способностями эффект или вред",  "Перестать сдерживаться",
								"Хвастаться своими достижениями/возможностями",  "Мгновенно создать нужный гаджет",  "Прорваться сквозь охрану",  "Избавиться от препятствия",  "Выбить из равновесия",  "Призвать сверстников к действию",  "Уничтожить важный символ",  "Заблокировать способности",  "Защитить невинного в опасности",  "Исчезнуть и появиться неожиданно",  "Явить пророчество",  "Заключить сделку с более слабым",  "Переместиться в другое тело",  "Перенаправить удар в кого-то другого",  "Раскрыть страшную тайну врага",  "Устроить шоу для зрителей",  "Играть на публику",  "Сбежать в безопасное место",  "Устроить бессмысленное разрушение",  "Оскорблять и провоцировать",  "Захватить самого слабого противника",  "Пригвоздить к месту",  "Избежать конфликта, где можно проиграть",  "Выпустить в мир ужасных монстров",  "Исчезнуть из вида",  "Создать обманки",  "Выдать свое местоположение ",  "Явить свою истинную сущность, сбросив маскировку",  "Удерживать на месте",  "Внедрять свои мысли/убеждения",  "Пуститься в воспоминания",  "Трансформироваться в нечто иное",  "Оставить свой знак",  "Разглагольствовать о своем величии и слабости прочих",  "Прорваться в защищенную область или вырваться оттуда",  "Украсть, не вызвав тревогу",  "Посочувствовать и дать совет",  "Поглотить нечто и усилиться",  "Показать человека внутри монстра",  "На некоторое время кардинально изменить окружение",  "Узнать чей-то секрет",  "Произнести речь переде пленниками",  "Подчинить поверженного врага",  "Приказать своим войскам атаковать со всей силой",  "Подготовить оружие судного дня",  "Раскрыть гениальный план",  "Взорваться градом ударов",  "Принудить достойного соперника к битве",  "Указать на опасности в будущем",  "Запутать и обмануть",  "Сбить с ног всех в области",  "Парализовать цель",  "Привести рациональные обоснования своих действий", 
							]
						}
					},
				},
				{
					title: "Ходы состояния Испуган",
					key: "condition_moves_afraid",
					color: "",
					ico: "",
					
					data: {
						list: {
							data: [
								"Спрятаться подальше",
								"Бежать от опасности или проблемы",
								"Наброситься не думая об угрозе",
								"Призвать к милосердию",
								"Скрыться за преградой",
							]
						}
					},
				},
				{
					title: "Ходы состояния Злой",
					key: "condition_moves_angry",
					color: "",
					ico: "",
					
					data: {
						list: {
							data: [
								"Учинить бездумное насилие",
								"Разрушать окружение",
								"Прервать беседу",
								"Наброситься на любую уязвимость",
								"Эскалация ситуации",
							]
						}
					},
				},
				{
					title: "Ходы состояния Виноватый",
					key: "condition_moves_guilty",
					color: "",
					ico: "",
					
					data: {
						list: {
							data: [
								"Искать прощения",
								"Жертвовать всем или чем- то ради искупления",
								"Обратиться к немыслимому",
								"Спихнуть вину на других",
								"Объяснить почему он это делает",
							]
						}
					},
				},
				{
					title: "Ходы состояния Отчаявшийся",
					key: "condition_moves_hopeless",
					color: "",
					ico: "",
					
					data: {
						list: {
							data: [
								"Сдаться без боя",
								"Уничтожить все вокруг",
								"Искать хоть лучик надежды",
								"Подрывать чужие убеждения",
								"Решиться на чудовищный поступок",
							]
						}
					},
				},
				{
					title: "Ходы состояния Неуверенный",
					key: "condition_moves_insecure",
					color: "",
					ico: "",
					
					data: {
						list: {
							data: [
								"Пойти ва-банк, наплевав на замысел",
								"Следовать чужому примеру",
								"Сомневаться в своих союзниках и планах",
								"Признать что поступает плохо",
								"Отойти на задний план",
							]
						}
					},
				},

				{
					title: "Происхождение",
					key: "background",
					color: "",
					ico: "",
					data: {
						list: {
							data: [
								"Участие в программе подготовки супер-солдат",  "Эксперименты ученных",  "Эксперименты пришельцев",  "Босс мафии",  "Некогда восходящий супергерой",  "Ужасающая трагедия",  "Исследователь неизвестного",  "Умелый вор",  "Пленник места/обстоятельств",  "Воздействие странного артефакта",  "Обретение артефакта/сил после вторжения",  "Украденный артефакт/костюм",  "Заложник двух миров",  "Фальшивая память",  "Государственная программа",  "Бывший агент",  "Разочарование в прошлой жизни",  "Изучение металюдей",  "Пришелец из будущего",  "Пришелец из параллельной вселенной",  "Наследник влиятельной фигуры",  "Жертва действий металюдей",  "Создание из иных миров",  "Городская легенда",  "Сделка с дьяволом",  "Искусственное создание",  "Слуга без хозяина",  "Некогда знаменитый злодей",  "Разум, запертый против воли",  "Некогда великий герой",  "Возвращение из другого времени/мира",  "Пытавшийся начать мирную жизнь суперзлодей",  "Избранный для защиты Земли",  "Разочарование в прошлых ценностях",  "Юный гений",  "Трагедия по вине металюдей",  "Неудачная попытка стать героем",  "Жертва обмана",  "Внемировая сущность",  "Бестелесное создание",  "Несбывшиеся надежды",  "Жертва межмировой катастрофы",  "Потомок суперзлодея",  "Жертва обмана корпорации",  "Некогда великая личность",  "Одна ошибка, и ты ошибся",  "Космический преступник",  "Забытый всеми",  "Лидер народа из космоса/будущего/другого мира",  "Воин из космоса/будущего/другого мира",  "Искусственное создание из космоса/будущего/другого мира",  "Охотник за головами из космоса/будущего/другого мира",  "Охотник за сокровищами из космоса/будущего/другого мира",  "Убийца, берущийся только за очень сложные цели",  "Наемник, берущийся только за очень сложные дела",  "Бывший защитник и слуга закона",  
							]
						}
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
				let oTmpResult = oParent.find(el=>el.key==sKey || el[sLang] && el[sLang].key==sKey);
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
					if(oSection && oSection.source) {
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
					o.move.data.key = oContent.key;					
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
			} else if(oContent && oContent.info){
				return {
					type: 'about',
					info: oContent.info
				};
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
		let aPath = sPath.split("/");
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
			case 'about': 
				return oData.info;
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

		if(options) {
			if(options.count) {
				nCount = options.count;
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
