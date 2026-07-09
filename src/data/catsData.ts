export interface CatDetail {
  id: string;
  name: string;
  breed: string;
  price: number;
  ageWeeks: number;
  gender: 'Male' | 'Female';
  imageUrl: string;
  badge?: string;
  about: string;
  aboutSecondary?: string;
  temperament: string[];
  medicalStatus: string[];
  wcfRegistered: boolean;
  fatherName?: string;
  fatherImage?: string;
  motherName?: string;
  motherImage?: string;
  gallery: string[];
}

export const catsData: Record<string, CatDetail> = {
  '1': {
    id: '1',
    name: 'Luna',
    breed: 'British Shorthair',
    price: 1200,
    ageWeeks: 14,
    gender: 'Female',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZXoDv6Ds7GXc94H-3qfkuLacr4113vW5l6xuYfnbtM3WmD8HFp2aOXi_rI-MO1YXeMmPxN4T_UghUQuP_P9IsWFdYBmJoz2THn8ksRZhRji3jXWJYYnf1sOUmJNCB_soIMGvBoFpEcGYaoHfiKdoqITWjCSdZchsOLaLIhg8pRtr5y9d9dTu1c9qndfQ1cEa2rvo3Ncpzcc5cb21_1tKYa8iILmTBFcIZb1k_Ub112zg1-Y9T4oGy18Mm4OKnTFFL_Vl7Cbe75E0',
    badge: 'Vet-Approved',
    about: 'Luna is the quintessential British Shorthair—stately, composed, and quietly affectionate. Known for her "round everything" look, she spends her afternoons finding the perfect patch of sunlight or supervising the kitchen activities from a comfortable distance. Unlike more demanding breeds, Luna is content with her own company but will greet you at the door with a soft chirp and a gentle head-bump.',
    aboutSecondary: 'She has a particular fondness for feather wands and organic silvervine treats. Her plush coat requires minimal grooming but she thoroughly enjoys the bonding time during a soft brushing session once a week.',
    temperament: ['Good with Kids', 'Calm Nature', 'Affectionate'],
    medicalStatus: [
      'Fully vaccinated (FVRCP & Rabies)',
      'Microchipped for global recovery',
      'Recent negative FeLV/FIV test',
      'De-wormed and flea treated'
    ],
    wcfRegistered: true,
    fatherName: 'Lord Grey',
    fatherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhmV3BU1WRaldSGGAMAI2_prmiTOrsoCasfckjfvgis5C7jGglCJCFQ24n5RCZ8fPwojosiyCHt5W0lY_QQvEvHtOMNZwg9XA4sWoX98HvN4ZpA6kPrUi1yzx7RlZxXJS96qB1MInGFmm5Ligsh84xVUWpGXeQlbacc4e7JRCV1IT4dqNyufmqQF2e0VPafX38Vob2AfUR3JYhqpKd5GwRPJU9clMtb_iPUTmgkXi7RsHhqX8NKz9IwPjqb12jO3cJvVm7QJhN4LM',
    motherName: 'Lady Pearl',
    motherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMOlpdPnsxTGq9RJgKsvMvaWIy5W5rc4l0rrXOVpfHDrMtxebm42Mygo_AdeLvGQQNyUHB2S20EY-mSwz--4lcrsv9KlUrom-njVTgHxYwGti1RmdSdBTkYWpTEx8TjhulNzvwzET6NZi8fSfq15EnasfphHjTZn2a_ptLbeen7_qRFZrYauljvMJgO5epc3wV-BeXekSphCxoyX84D5wiKHxH7a3GSeZjMYl0uDbu1t6t3bi3vlxjS6g5unp74rivOjoLSUDw7_Q',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAG4v5PCz3Q1hBeuTmw0LNGkZmw_HcbuOUxuP7Jt1kvpV3AimxbIw9ZvsEzjaYQLEqnRb0B4etdu7nGU5FPbyQ0_sKBjBLSDYzrW2C2x6WLl1zhJyi4NIhbQDuxM2GAzAtMFnXHGrT46zqHgrWq8d0rQydBIaK4Hbg2FFGxzW2hXyXHUqLHfSGZtDO9cKZxLSQTCjbAkdg_Ym28xa8uI4Tss7t-bktrCzQzyTrPXs5Vlm2kxyvHRc5T1zNX5LRBzUbTNwz4jCHpHEA',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC8ZE1NpDpEuOS5B7wGHXhyzF-_sj_LOa05QLvsoN6BHzWz6FovClFjHgB_wFhDEnbgzo_vhcFmg2RWUOm33AYfi7ktDZE8LWxcdUdQZs8jTx-L4Q-r0fXsn_3gx9u-Zmok-7b7f1O3MsltstZle1DchXROkGSFHBLVCzmJrtN7pqw7xbSKrCfDbvMAtR0_tE5W2YtZlvkkvzQ74qd4t-j3ySbO5ucLhtnA9WqB1ELfEMnX-_opmuNJvd4BmfM30_3_xAsSqSVPf-c',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDFP8bNmxbTB54VSOaZfhaQXMyZuKYrpe2xgPmG5Ip16cSxNGhySZUQiIHvn8tthrTU45dWbghR1hSOz1Zw4dBGaYFY4FxSOApebTbIRUi0owGKTcflTIJTyx5lU0UjS3BeOxx-Vhw9SH7LWF2rEmPXQRYd-K47njeE0zziMAQBy7qBlKLgsGhUpb6dd5mCqgyH2dxjs1dGELAo7WvxxQsWAnokjmV3N-wG7YrQ1xWm27p2wLiG9uZIb9gIgDtnpbaCTxQl0U2hK6E',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDOzd-JJxHL6KoM_kkmD-ErA3oXZMlQqlqezhZMQp1viNu3ExfpDxYjVprng5HYFs5TRZpPZfLLZus3FPfydx7XMUMKMWlbVYdV-T7amqqvGQSacrHd4jtZ6zvux3jZdYqdSngbE2SgxR2ne_HkF6_LbBuq5N-ENkyjWZMoSBTgGF4nSva-d-gHZecCa3P5et_b0FWTg7hI2L-uivmeB8O3HdtI3Wa_vATomjBVUUmV1tIX_yv_Zxyx--SfyzeZ8IOczS6wWAW_Tms'
    ]
  },
  '2': {
    id: '2',
    name: 'Oliver',
    breed: 'Persian',
    price: 1500,
    ageWeeks: 12,
    gender: 'Male',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0mlmqmYhBNL0hXmDvKVI9Z9oSYd7O3QpFXKrIt_t3AJ6pbCdNBL-_9uxCmY4xPrywubqnPiLYe-f5KUt9LhjIVJpnxW_G3ifcKgyFcBEdVkoMtlTOJKhmgjniwXn2DP-rG2Kue1mK9p1arlYO0W9dR1jRPxlXHu_PqCSK1gieji6VPD5E9Ddl8wqU4lHFydXVagdEyUgUlK-xBjfbtlGcNvc4y71vUSh0MZ43GYUtYpGmOdeepYuAj7gGQu0AlxnAMy7kRtlvcyU',
    badge: 'Popular',
    about: 'Oliver is a gorgeous flat-faced Persian kitten with a luxurious long white coat and a serene, gentle demeanor. He loves to be pampered, brushed, and held, making him the ultimate lap cat companion.',
    aboutSecondary: 'Known for his quiet voice and sweet expressions, Oliver enjoys peaceful settings. He is well-socialized and gets along with other household pets.',
    temperament: ['Gentle Spirit', 'Quiet & Sweet', 'Loves Pampering'],
    medicalStatus: [
      'First rounds of vaccines complete',
      'Microchipped',
      'Negative FeLV/FIV',
      'Dewormed'
    ],
    wcfRegistered: true,
    fatherName: 'Snow King',
    fatherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_il_S6gdoWFmd-g6vyP2tXCRBdI4Y_kJyTSJbrgEwBqbocT6SEpzwp4ZWnKFfzbL-yimjBddZxULi8BbHOh-Bk640DRM6T49FoUpqBomIvG1BSpF-2Jxh9bvQrzo0-u4-cJf6YER93FyuO2f23m3DpOqhxJ5SPl7ujErASytkwgwSodVUftUpExaWUyPIwBmBh_IckG969606XMy_PPrSmHcMGIRFoAjVCZ02P5tFAc4lgzzzXhVCEHuu9VsYbJvqcVf-oEeQnY',
    motherName: 'Lady Pearl',
    motherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMOlpdPnsxTGq9RJgKsvMvaWIy5W5rc4l0rrXOVpfHDrMtxebm42Mygo_AdeLvGQQNyUHB2S20EY-mSwz--4lcrsv9KlUrom-njVTgHxYwGti1RmdSdBTkYWpTEx8TjhulNzvwzET6NZi8fSfq15EnasfphHjTZn2a_ptLbeen7_qRFZrYauljvMJgO5epc3wV-BeXekSphCxoyX84D5wiKHxH7a3GSeZjMYl0uDbu1t6t3bi3vlxjS6g5unp74rivOjoLSUDw7_Q',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB0mlmqmYhBNL0hXmDvKVI9Z9oSYd7O3QpFXKrIt_t3AJ6pbCdNBL-_9uxCmY4xPrywubqnPiLYe-f5KUt9LhjIVJpnxW_G3ifcKgyFcBEdVkoMtlTOJKhmgjniwXn2DP-rG2Kue1mK9p1arlYO0W9dR1jRPxlXHu_PqCSK1gieji6VPD5E9Ddl8wqU4lHFydXVagdEyUgUlK-xBjfbtlGcNvc4y71vUSh0MZ43GYUtYpGmOdeepYuAj7gGQu0AlxnAMy7kRtlvcyU'
    ]
  },
  '3': {
    id: '3',
    name: 'Atlas',
    breed: 'Maine Coon',
    price: 1800,
    ageWeeks: 16,
    gender: 'Male',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtn6JJxUnvAxJ24W76kcm_6hd6Fjo9pk1MhQQE9fKMO3iFUPi8oZBzD6RxVipKD4tGx9vb7jqPqPI6Ua812DmMgjcsmnklG48jtbksoEBQAInsJNKSaXuU32gylhqCbK8F9Rwr5NrRdMU-cJM-iBUivMBuSWe0BkBin2b4vtt5IOfIbjZzckTwzIWDcbsYY8CE2vBPldkfqKlFepGt-LEeEcaEfo79HD73dR4PH8fqafq0unwZSc7BEhP4tCTqYDodVfemT456O-s',
    badge: 'Premium',
    about: 'Atlas is a majestic, high-pedigree Maine Coon kitten with strong tufted ears, large paws, and a highly playful nature. He represents the gentle giant reputation of the breed.',
    aboutSecondary: 'He loves exploring, climbing cat trees, and playing with water. A perfect choice for families seeking an active and majestic companion.',
    temperament: ['Playful', 'Active Climber', 'Highly Social'],
    medicalStatus: [
      'Fully vaccinated',
      'Microchipped',
      'Negative FeLV/FIV',
      'Health guarantee certificate'
    ],
    wcfRegistered: true,
    fatherName: 'Snowy King',
    fatherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_il_S6gdoWFmd-g6vyP2tXCRBdI4Y_kJyTSJbrgEwBqbocT6SEpzwp4ZWnKFfzbL-yimjBddZxULi8BbHOh-Bk640DRM6T49FoUpqBomIvG1BSpF-2Jxh9bvQrzo0-u4-cJf6YER93FyuO2f23m3DpOqhxJ5SPl7ujErASytkwgwSodVUftUpExaWUyPIwBmBh_IckG969606XMy_PPrSmHcMGIRFoAjVCZ02P5tFAc4lgzzzXhVCEHuu9VsYbJvqcVf-oEeQnY',
    motherName: 'Lady Pearl',
    motherImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMOlpdPnsxTGq9RJgKsvMvaWIy5W5rc4l0rrXOVpfHDrMtxebm42Mygo_AdeLvGQQNyUHB2S20EY-mSwz--4lcrsv9KlUrom-njVTgHxYwGti1RmdSdBTkYWpTEx8TjhulNzvwzET6NZi8fSfq15EnasfphHjTZn2a_ptLbeen7_qRFZrYauljvMJgO5epc3wV-BeXekSphCxoyX84D5wiKHxH7a3GSeZjMYl0uDbu1t6t3bi3vlxjS6g5unp74rivOjoLSUDw7_Q',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtn6JJxUnvAxJ24W76kcm_6hd6Fjo9pk1MhQQE9fKMO3iFUPi8oZBzD6RxVipKD4tGx9vb7jqPqPI6Ua812DmMgjcsmnklG48jtbksoEBQAInsJNKSaXuU32gylhqCbK8F9Rwr5NrRdMU-cJM-iBUivMBuSWe0BkBin2b4vtt5IOfIbjZzckTwzIWDcbsYY8CE2vBPldkfqKlFepGt-LEeEcaEfo79HD73dR4PH8fqafq0unwZSc7BEhP4tCTqYDodVfemT456O-s'
    ]
  },
  '4': {
    id: '4',
    name: 'Bella',
    breed: 'Siamese',
    price: 950,
    ageWeeks: 10,
    gender: 'Female',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Df-HSr06al_VqTyreU19Mlp9bw0g0UpzrDf-C_6gRhzi3B2ndTvihTTcBwxZEIV1RmqwQdsxM6Don_QvIR8SzgNw0gD3mD9pTxGFniSgu2cEXVHWZF1VNwzuqlcsM5d6oLyyG9TNWmALjqvzFRUzegvw0qqZt62nvAOOQRQ5SrS5Crior6vO6M0EEdRq4tTpnjbX4e6I6EkOOw92Abq4BvxNLFcty7jeqysZG9SP7Ftg-VoMBEYizMP55s5KUaBgDjhMLWastkM',
    about: 'Bella is a lovely Siamese kitten with stunning deep blue eyes and beautiful point coloration. She is curious, vocal, and highly intelligent, constantly seeking interaction.',
    aboutSecondary: 'Bella thrives in active homes where she can participate in everyday activities and get plenty of love and playtime.',
    temperament: ['Curious', 'Vocal & Chatty', 'Highly Intelligent'],
    medicalStatus: [
      'Vaccinated',
      'Microchipped',
      'Negative FeLV/FIV'
    ],
    wcfRegistered: false,
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Df-HSr06al_VqTyreU19Mlp9bw0g0UpzrDf-C_6gRhzi3B2ndTvihTTcBwxZEIV1RmqwQdsxM6Don_QvIR8SzgNw0gD3mD9pTxGFniSgu2cEXVHWZF1VNwzuqlcsM5d6oLyyG9TNWmALjqvzFRUzegvw0qqZt62nvAOOQRQ5SrS5Crior6vO6M0EEdRq4tTpnjbX4e6I6EkOOw92Abq4BvxNLFcty7jeqysZG9SP7Ftg-VoMBEYizMP55s5KUaBgDjhMLWastkM'
    ]
  },
  '5': {
    id: '5',
    name: 'Misty',
    breed: 'Ragdoll',
    price: 1600,
    ageWeeks: 15,
    gender: 'Female',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDy-8sJm5QepToBssWeo5tRPOIIF4lSBzs6bFZ5ouFPUJoQyYa_mWt34jWUt13h3AzLCo5FUzQ3YJHnq_jHGLRXZWd3NqI4At_7tlHM6_bIFEU55FHHZrL2ct-Pk4C_k51_kSW4GV83r5NClPvAoz7OF2i_j9QN_G-nu3AT7RLQWV4pDbJcHW06AsZ0ECj4kwXpKu1WxGxR3fLIwVpuexAugpYctujZ0ey0Kr-XYsMHr6vM_YpqhqagKksaufwe_F03qks1wiBL1e4',
    badge: 'Socialized',
    about: 'Misty is a sweet and cuddly Ragdoll kitten who gets her name from her soft, misty-blue coat. True to the breed, she goes completely limp with trust and affection when picked up.',
    aboutSecondary: 'She is raised around kids and other pets, making her extremely well-socialized and ready to join any household.',
    temperament: ['Docile & Calm', 'Loves Cuddles', 'Kid-Friendly'],
    medicalStatus: [
      'Fully vaccinated',
      'Microchipped',
      'Negative FeLV/FIV'
    ],
    wcfRegistered: true,
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDy-8sJm5QepToBssWeo5tRPOIIF4lSBzs6bFZ5ouFPUJoQyYa_mWt34jWUt13h3AzLCo5FUzQ3YJHnq_jHGLRXZWd3NqI4At_7tlHM6_bIFEU55FHHZrL2ct-Pk4C_k51_kSW4GV83r5NClPvAoz7OF2i_j9QN_G-nu3AT7RLQWV4pDbJcHW06AsZ0ECj4kwXpKu1WxGxR3fLIwVpuexAugpYctujZ0ey0Kr-XYsMHr6vM_YpqhqagKksaufwe_F03qks1wiBL1e4'
    ]
  },
  '6': {
    id: '6',
    name: 'Pippin',
    breed: 'Scottish Fold',
    price: 1400,
    ageWeeks: 9,
    gender: 'Male',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt3MWwPHhrJQxSaInNMpTQOpZ7EpknKeH9XxuTPgEry8hRM-nR-fOX-vQK44iJ-oGEwOePvvh8f8PfWpACK0VFmx16u5kLe0cuMK5Qh8qeTjm1fb0pXcTyKadd9wRyqeDEqewXJCfjpSGIGVnDBWUC7qfDU2XK2nP_EiCZ5gdHNRF9zBShBvt9_EsaJ_9-KAGszmMCko2KTdbMcHAld-1UFV-1UBbMOH9JC8-yLtIVLmMMqkH3R2IBAMAx9ZjYgIp711DrtEmOYCk',
    about: 'Pippin is a charming Scottish Fold kitten with tightly folded ears and large, round expressive eyes. He is extremely gentle, sweet, and loves rolling around on soft carpets.',
    aboutSecondary: 'His playful antics and adorable owl-like face are guaranteed to steal your heart from day one.',
    temperament: ['Sweet-Tempered', 'Playful & Silly', 'Gentle Nature'],
    medicalStatus: [
      'First vaccines completed',
      'Negative FeLV/FIV'
    ],
    wcfRegistered: true,
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBt3MWwPHhrJQxSaInNMpTQOpZ7EpknKeH9XxuTPgEry8hRM-nR-fOX-vQK44iJ-oGEwOePvvh8f8PfWpACK0VFmx16u5kLe0cuMK5Qh8qeTjm1fb0pXcTyKadd9wRyqeDEqewXJCfjpSGIGVnDBWUC7qfDU2XK2nP_EiCZ5gdHNRF9zBShBvt9_EsaJ_9-KAGszmMCko2KTdbMcHAld-1UFV-1UBbMOH9JC8-yLtIVLmMMqkH3R2IBAMAx9ZjYgIp711DrtEmOYCk'
    ]
  },
  '7': {
    id: '7',
    name: 'Leo',
    breed: 'Bengal',
    price: 2200,
    ageWeeks: 18,
    gender: 'Male',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-XXEuiYooZBvJQp6SJbIYwu5CV2S6WHzNq3B82kRSKGZKb94bSvS8PKn_WJbWMkiub-Lz0Yue6U16EnD2IcWphNF2wRvTkK4GWGu8yqQJbVKf5ZetwLKef0xYJzcNvwo1MWCsPmhMH0uG_GDa6zldQvAkhzupkUN0wNAPR7aSAO1eLdtE7irhzkbRlUKa1cPJQpA_83US1gsYGXVIsJW3qvhoaSe1aXc5EWzWqH5c-Hs9dygBM23NCu0dfM8zoJFeMqF85fMS_HU',
    badge: 'Rare Pattern',
    about: 'Leo is a striking Bengal kitten with high-contrast wild rosettes and sleek, glittery fur. He has a lot of energy, is highly active, and loves interactive toys.',
    aboutSecondary: 'Leo is highly intelligent and can easily learn tricks. He thrives in active environments where he can jump and run.',
    temperament: ['High Energy', 'Intelligent', 'Athletic & Active'],
    medicalStatus: [
      'Fully vaccinated',
      'Microchipped',
      'Negative FeLV/FIV'
    ],
    wcfRegistered: true,
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA-XXEuiYooZBvJQp6SJbIYwu5CV2S6WHzNq3B82kRSKGZKb94bSvS8PKn_WJbWMkiub-Lz0Yue6U16EnD2IcWphNF2wRvTkK4GWGu8yqQJbVKf5ZetwLKef0xYJzcNvwo1MWCsPmhMH0uG_GDa6zldQvAkhzupkUN0wNAPR7aSAO1eLdtE7irhzkbRlUKa1cPJQpA_83US1gsYGXVIsJW3qvhoaSe1aXc5EWzWqH5c-Hs9dygBM23NCu0dfM8zoJFeMqF85fMS_HU'
    ]
  },
  '8': {
    id: '8',
    name: 'Mochi',
    breed: 'Munchkin',
    price: 1350,
    ageWeeks: 11,
    gender: 'Female',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoq8d0G-lqagvHUTRAd_s7VhNftuYqF6Q9YSkju519UjfYQU1TSpWIrFMjHYARGzHj2AgFgUVGVg3Pjh_EfDqXoG623QtnyFgRGuX6MiCLnrLrDabymFaGssVa0Ivid7OKCJPJsJtPoSwcxv_-fHV2l16YbQzY9cjblTSd5yoCoyT_ox3B0o9LA5HgdGiQhh8bWqkt_l-gkEmabyN91Oa2WbId6tnBJzB-e8e0vYs7iJu-gw4P8isVeUhnKcFeZUqWv7Uaft1ZnvU',
    about: 'Mochi is an adorable Munchkin kitten with short stubby legs and a large heart. She is incredibly playful and fast, running around like a small sports car.',
    aboutSecondary: 'Mochi loves sleeping on warm blankets and cuddling at night. She is super affectionate and friendly to everyone.',
    temperament: ['Playful & Fast', 'Loving & Warm', 'Highly Friendly'],
    medicalStatus: [
      'Vaccines complete',
      'Negative FeLV/FIV'
    ],
    wcfRegistered: false,
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBoq8d0G-lqagvHUTRAd_s7VhNftuYqF6Q9YSkju519UjfYQU1TSpWIrFMjHYARGzHj2AgFgUVGVg3Pjh_EfDqXoG623QtnyFgRGuX6MiCLnrLrDabymFaGssVa0Ivid7OKCJPJsJtPoSwcxv_-fHV2l16YbQzY9cjblTSd5yoCoyT_ox3B0o9LA5HgdGiQhh8bWqkt_l-gkEmabyN91Oa2WbId6tnBJzB-e8e0vYs7iJu-gw4P8isVeUhnKcFeZUqWv7Uaft1ZnvU'
    ]
  }
};
